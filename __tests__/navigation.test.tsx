import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Navbar from '../app/components/Navbar';

describe('Navbar Component - Desktop & Mobile Navigation', () => {
  it('renders brand logo with accessible label and link to top', () => {
    render(<Navbar />);
    const logoLink = screen.getByRole('link', { name: /Mücahid Enes Deniz - Home/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('renders all 4 section links and resume button in desktop navigation while drawer is closed', () => {
    render(<Navbar />);
    // When drawer is closed, only 1 accessible link exists per section (desktop)
    const aboutLink = screen.getByRole('link', { name: /About/i });
    expect(aboutLink).toHaveAttribute('href', '#about');

    const expLink = screen.getByRole('link', { name: /Experience/i });
    expect(expLink).toHaveAttribute('href', '#experience');

    const workLink = screen.getByRole('link', { name: /Work/i });
    expect(workLink).toHaveAttribute('href', '#work');

    const contactLink = screen.getByRole('link', { name: /Contact/i });
    expect(contactLink).toHaveAttribute('href', '#contact');

    const resumeLink = screen.getByRole('link', { name: /Resume/i });
    expect(resumeLink).toHaveAttribute('href', '/resume.pdf');
  });

  it('renders mobile menu button with accessible aria attributes', () => {
    render(<Navbar />);
    const menuButton = screen.getByRole('button', { name: /Open Navigation Menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens mobile drawer when toggle button is clicked and closes on link click', () => {
    render(<Navbar />);
    const menuButton = screen.getByRole('button', { name: /Open Navigation Menu/i });
    
    // Open drawer
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    
    // Now both desktop and mobile drawer links are accessible
    const aboutLinks = screen.getAllByRole('link', { name: /About/i });
    expect(aboutLinks.length).toBe(2);
    
    // Click the drawer link (the second one)
    fireEvent.click(aboutLinks[1]!);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});
