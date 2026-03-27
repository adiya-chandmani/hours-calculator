'use client';

import { useMemo, useState } from 'react';

type Mode = 'add' | 'subtract';

function formatTotalMinutes(totalMinutes: number) {
  const sign = totalMinutes < 0 ? '-' : '';
  const absolute = Math.abs(totalMinutes);
  const hours = Math.floor(absolute / 60);
  const minutes = absolute % 60;
  return `${sign}${hours} hour${hours === 1 ? '' : 's'} ${minutes} minute${minutes === 1 ? '' : 's'}`;
}

export default function HoursCalculator() {
  const [startHours, setStartHours] = useState('8');
  const [startMinutes, setStartMinutes] = useState('30');
  const [deltaHours, setDeltaHours] = useState('1');
  const [deltaMinutes, setDeltaMinutes] = useState('45');
  const [mode, setMode] = useState<Mode>('add');

  const totalMinutes = useMemo(() => {
    const base = Number(startHours || 0) * 60 + Number(startMinutes || 0);
    const delta = Number(deltaHours || 0) * 60 + Number(deltaMinutes || 0);
    return mode === 'add' ? base + delta : base - delta;
  }, [deltaHours, deltaMinutes, mode, startHours, startMinutes]);

  const clockHours = ((Math.floor(totalMinutes / 60) % 24) + 24) % 24;
  const clockMinutes = ((totalMinutes % 60) + 60) % 60;
  const timeOfDay = `${String(clockHours).padStart(2, '0')}:${String(clockMinutes).padStart(2, '0')}`;

  return (
    <section className="card" aria-labelledby="hours-calculator-title">
      <h2 id="hours-calculator-title">Calculate hours and minutes</h2>
      <p>Add or subtract time instantly. Great for shifts, payroll checks, schedules, or simple duration math.</p>
      <form>
        <div className="input-grid">
          <label>
            Starting hours
            <input type="number" inputMode="numeric" min="0" value={startHours} onChange={(e) => setStartHours(e.target.value)} />
          </label>
          <label>
            Starting minutes
            <input type="number" inputMode="numeric" min="0" max="59" value={startMinutes} onChange={(e) => setStartMinutes(e.target.value)} />
          </label>
          <label>
            Operation
            <select value={mode} onChange={(e) => setMode(e.target.value as Mode)}>
              <option value="add">Add time</option>
              <option value="subtract">Subtract time</option>
            </select>
          </label>
          <label>
            Hours to {mode}
            <input type="number" inputMode="numeric" min="0" value={deltaHours} onChange={(e) => setDeltaHours(e.target.value)} />
          </label>
          <label>
            Minutes to {mode}
            <input type="number" inputMode="numeric" min="0" max="59" value={deltaMinutes} onChange={(e) => setDeltaMinutes(e.target.value)} />
          </label>
        </div>
      </form>
      <div className="card" style={{ marginTop: '1rem', background: '#f8fbff' }}>
        <p className="result">Total duration: {formatTotalMinutes(totalMinutes)}</p>
        <p className="result">Clock result: {timeOfDay}</p>
      </div>
    </section>
  );
}
