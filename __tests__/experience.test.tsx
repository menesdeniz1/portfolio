import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Experience from '../app/components/Experience';

describe('Experience Component - WAI-ARIA & Interactions', () => {
  it('renders tablist and all tab buttons', () => {
    render(<Experience />);
    const tablist = screen.getByRole('tablist');
    expect(tablist).toBeInTheDocument();

    const tabs = screen.getAllByRole('tab');
    expect(tabs.length).toBe(3);
    expect(tabs[0]).toHaveTextContent('Kastamonu Entegre');
    expect(tabs[1]).toHaveTextContent('TalenTree');
    expect(tabs[2]).toHaveTextContent('Harpeon');
  });

  it('indicates active tab with aria-selected="true"', () => {
    render(<Experience />);
    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
  });

  it('updates tabpanel content upon clicking a tab', () => {
    render(<Experience />);
    const tabs = screen.getAllByRole('tab');
    
    // Initial panel displays Kastamonu
    expect(screen.getByText(/Kastamonu Entegre/i, { selector: 'span, a' })).toBeInTheDocument();

    // Click TalenTree tab
    fireEvent.click(tabs[1]!);
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByText(/TalenTree/i, { selector: 'span, a' })).toBeInTheDocument();
  });

  it('supports keyboard navigation via ArrowDown and ArrowUp', () => {
    render(<Experience />);
    const tabs = screen.getAllByRole('tab');
    tabs[0]!.focus();

    // Arrow down moves focus and selects next tab
    fireEvent.keyDown(tabs[0]!, { key: 'ArrowDown' });
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');

    // Arrow down again
    fireEvent.keyDown(tabs[1]!, { key: 'ArrowDown' });
    expect(tabs[2]).toHaveAttribute('aria-selected', 'true');

    // Arrow up moves back
    fireEvent.keyDown(tabs[2]!, { key: 'ArrowUp' });
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
  });
});
