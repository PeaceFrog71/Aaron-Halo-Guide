import { useState, useMemo } from 'react';
import { getLocationById } from '../types/locations';
import { getAvailableStartLocations, getAvailableDestinations, getRouteWithBandInfo } from '../types/routes';
import { BANDS } from '../types/bands';
import { formatDistance } from '../utils/calculator';
import './RoutePlanner.css';

type NavigationMode = 'route' | 'stanton';
type SortMode = 'band' | 'density';

export function RoutePlanner() {
  const [mode, setMode] = useState<NavigationMode>('stanton');
  const [sortMode, setSortMode] = useState<SortMode>('band');
  const [startId, setStartId] = useState<string>('');
  const [destinationId, setDestinationId] = useState<string>('');

  // Get available start locations (for Route Mode)
  const availableStarts = useMemo(() => {
    const startIds = getAvailableStartLocations();
    return startIds
      .map(id => getLocationById(id))
      .filter((loc): loc is NonNullable<typeof loc> => loc !== null)
      .sort((a, b) => a.shortName.localeCompare(b.shortName));
  }, []);

  // Get available destinations based on selected start (for Route Mode)
  const availableDestinations = useMemo(() => {
    if (!startId) return [];
    const destIds = getAvailableDestinations(startId);
    return destIds
      .map(id => getLocationById(id))
      .filter((loc): loc is NonNullable<typeof loc> => loc !== null)
      .sort((a, b) => a.shortName.localeCompare(b.shortName));
  }, [startId]);

  // Get route data (for Route Mode)
  const routeData = useMemo(() => {
    if (!startId || !destinationId) return null;
    return getRouteWithBandInfo(startId, destinationId);
  }, [startId, destinationId]);

  // Get sorted bands for Stanton Method
  const sortedBands = useMemo(() => {
    const bands = [...BANDS];
    if (sortMode === 'density') {
      return bands.sort((a, b) => b.relativeDensity - a.relativeDensity);
    }
    return bands.sort((a, b) => a.id - b.id);
  }, [sortMode]);

  // Handle start change - reset destination if not valid
  const handleStartChange = (newStartId: string) => {
    setStartId(newStartId);
    if (newStartId) {
      const validDests = getAvailableDestinations(newStartId);
      if (!validDests.includes(destinationId)) {
        setDestinationId('');
      }
    } else {
      setDestinationId('');
    }
  };

  const startLocation = startId ? getLocationById(startId) : null;
  const destLocation = destinationId ? getLocationById(destinationId) : null;

  return (
    <div className="route-planner">
      {/* Mode Toggle */}
      <div className="mode-toggle">
        <button
          className={`mode-btn ${mode === 'stanton' ? 'active' : ''}`}
          onClick={() => setMode('stanton')}
        >
          Stanton Method
        </button>
        <button
          className={`mode-btn ${mode === 'route' ? 'active' : ''}`}
          onClick={() => setMode('route')}
        >
          Route Mode
        </button>
      </div>

      {/* Stanton Method */}
      {mode === 'stanton' && (
        <div className="stanton-method">
          <div className="stanton-header">
            <p className="method-description">
              Monitor your distance to the <strong>Stanton</strong> marker while traveling.
              Drop out of quantum when you reach your target band range.
            </p>
          </div>

          <div className="plane-warning">
            <span className="warning-icon">!</span>
            <span>
              <strong>Get on plane first:</strong> Jump to any station or Lagrange point
              before heading to the halo to ensure you're aligned with the ecliptic plane.
            </span>
          </div>

          <div className="sort-controls">
            <span className="sort-label">Sort by:</span>
            <button
              className={`sort-btn ${sortMode === 'band' ? 'active' : ''}`}
              onClick={() => setSortMode('band')}
            >
              Band #
            </button>
            <button
              className={`sort-btn ${sortMode === 'density' ? 'active' : ''}`}
              onClick={() => setSortMode('density')}
            >
              Density
            </button>
          </div>

          <div className="band-table stanton-table">
            <div className="band-header stanton-header-row">
              <span className="band-col-name">Band</span>
              <span className="band-col-range">Drop Out Range</span>
              <span className="band-col-density">Density</span>
            </div>
            {sortedBands.map(band => (
              <div key={band.id} className={`band-row density-${getDensityClass(band.relativeDensity)}`}>
                <span className="band-col-name">
                  {band.name}
                  {band.relativeDensity === 1.0 && <span className="peak-badge" title="Highest density">*</span>}
                </span>
                <span className="band-col-range">
                  {formatDistance(band.innerDistance)} - {formatDistance(band.outerDistance)}
                </span>
                <span className="band-col-density">
                  <span className="density-bar" style={{ width: `${band.relativeDensity * 100}%` }} />
                  <span className="density-value">{Math.round(band.relativeDensity * 100)}%</span>
                </span>
              </div>
            ))}
          </div>

          <div className="route-instructions">
            <p className="instruction-title">How to use Stanton Method:</p>
            <ol>
              <li>Jump to any station to get on the ecliptic plane</li>
              <li>Set a destination that will take you through the Aaron Halo</li>
              <li>Start quantum travel</li>
              <li>Open MobiGlas and select the <strong>Stanton</strong> marker</li>
              <li>Watch the distance - exit when within your target band's range</li>
            </ol>
          </div>
        </div>
      )}

      {/* Route Mode */}
      {mode === 'route' && (
        <>
          <div className="route-selectors">
            <div className="form-group">
              <label>Start Location</label>
              <select
                value={startId}
                onChange={(e) => handleStartChange(e.target.value)}
              >
                <option value="">Select start...</option>
                {availableStarts.map(loc => (
                  <option key={loc.id} value={loc.id}>
                    {loc.shortName} - {loc.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Destination</label>
              <select
                value={destinationId}
                onChange={(e) => setDestinationId(e.target.value)}
                disabled={!startId}
              >
                <option value="">Select destination...</option>
                {availableDestinations.map(loc => (
                  <option key={loc.id} value={loc.id}>
                    {loc.shortName} - {loc.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {routeData && startLocation && destLocation && (
            <div className="route-results">
              <div className="route-summary">
                <span className="route-label">Route:</span>
                <span className="route-path">
                  {startLocation.shortName} → {destLocation.shortName}
                </span>
                <span className="route-distance">
                  {formatDistance(routeData.route.totalDistance)}
                </span>
              </div>

              <div className="band-table">
                <div className="band-header">
                  <span className="band-col-name">Band</span>
                  <span className="band-col-stanton">Stanton Marker</span>
                  <span className="band-col-dest">To Destination</span>
                  <span className="band-col-density">Density</span>
                </div>
                {routeData.bandDetails.map(({ band, exit }) => (
                  <div key={band.id} className={`band-row density-${getDensityClass(band.relativeDensity)}`}>
                    <span className="band-col-name">{band.name}</span>
                    <span className="band-col-stanton">{formatDistance(exit.distanceFromStanton)}</span>
                    <span className="band-col-dest">{formatDistance(exit.distanceToDestination)}</span>
                    <span className="band-col-density">
                      <span className="density-bar" style={{ width: `${band.relativeDensity * 100}%` }} />
                    </span>
                  </div>
                ))}
              </div>

              <div className="route-instructions">
                <p className="instruction-title">How to use:</p>
                <ol>
                  <li>Start quantum travel toward <strong>{destLocation.shortName}</strong></li>
                  <li>Open MobiGlas and select the <strong>Stanton</strong> marker</li>
                  <li>Watch the distance to Stanton marker</li>
                  <li>Exit QT when it matches your target band distance</li>
                </ol>
              </div>
            </div>
          )}

          {!routeData && startId && destinationId && (
            <div className="no-route">
              No route data available for this combination.
            </div>
          )}

          {!startId && (
            <div className="placeholder-message">
              Select a start and destination to see exit distances for each Aaron Halo band.
            </div>
          )}
        </>
      )}
    </div>
  );
}

function getDensityClass(density: number): string {
  if (density >= 0.9) return 'high';
  if (density >= 0.7) return 'medium';
  return 'low';
}
