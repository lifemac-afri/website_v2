"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  upcomingEvents, 
  upcomingEventsSTEMIZE, 
  upcomingEventsPSP, 
  upcomingEventsYLT,
  successStories,
  successStoriesSTEMIZE,
  successStoriesPSP,
  successStoriesYLT,
  teamMembers,
  testimonials,
  currentPartners
} from '@/data';

// Define Types
export interface Event {
  id: string | number;
  title: string;
  date: string; // Keeping as string for simplicity with JSON/Input, can parse to Date when needed
  location: string;
  image?: string;
  category?: string; // 'General', 'STEMIZE', 'PSP', 'YLT'
  description?: string;
  registrations?: number;
  status?: 'upcoming' | 'past' | 'draft' | 'cancelled';
}

export interface Story {
  id: string | number;
  title: string;
  description: string;
  image?: string;
  category?: string;
  date?: string;
  excerpt?: string;
  content?: string;
  author?: string;
}

export interface TeamMember {
  id: string | number;
  name: string;
  role: string;
  image: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface Testimonial {
  id?: string | number;
  quote: string;
  name: string;
  role: string;
  image: string;
  program?: string;
  status?: string;
  date?: string;
}

export interface Partner {
  name: string;
  logo: string;
}

interface DataContextType {
  events: Event[];
  stories: Story[];
  team: TeamMember[];
  testimonials: Testimonial[];
  partners: Partner[];
  
  // Actions
  addEvent: (event: Event) => void;
  updateEvent: (event: Event) => void;
  deleteEvent: (id: string | number) => void;
  
  addStory: (story: Story) => void;
  updateStory: (story: Story) => void;
  deleteStory: (id: string | number) => void;

  addTeamMember: (member: TeamMember) => void;
  updateTeamMember: (member: TeamMember) => void;
  deleteTeamMember: (id: string | number) => void;

  addTestimonial: (testimonial: Testimonial) => void;
  updateTestimonial: (testimonial: Testimonial) => void;
  deleteTestimonial: (id: string | number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Helper to merge initial data
const getInitialEvents = (): Event[] => {
  const general = upcomingEvents.map(e => ({ ...e, category: 'General', status: 'upcoming' } as Event));
  const stem = upcomingEventsSTEMIZE.map(e => ({ ...e, category: 'STEMIZE', status: 'upcoming' } as Event));
  const psp = upcomingEventsPSP.map(e => ({ ...e, category: 'PSP', status: 'upcoming' } as Event));
  const ylt = upcomingEventsYLT.map(e => ({ ...e, category: 'YLT', status: 'upcoming' } as Event));
  return [...general, ...stem, ...psp, ...ylt];
};

const getInitialStories = (): Story[] => {
    const general = successStories.map(s => ({ ...s, category: 'General' } as Story));
    const stem = successStoriesSTEMIZE.map(s => ({ ...s, category: 'STEMIZE' } as Story));
    const psp = successStoriesPSP.map(s => ({ ...s, category: 'PSP' } as Story));
    const ylt = successStoriesYLT.map(s => ({ ...s, category: 'YLT' } as Story));
    return [...general, ...stem, ...psp, ...ylt];
}

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state with lazy initializer to check localStorage first
  const [events, setEvents] = useState<Event[]>(() => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('lifemac_events');
        if (saved) return JSON.parse(saved);
    }
    return getInitialEvents();
  });

  const [stories, setStories] = useState<Story[]>(() => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('lifemac_stories');
        if (saved) return JSON.parse(saved);
    }
    return getInitialStories();
  });

  const [team, setTeam] = useState<TeamMember[]>(() => {
      if (typeof window !== 'undefined') {
          const saved = localStorage.getItem('lifemac_team');
          if (saved) return JSON.parse(saved);
      }
      return teamMembers;
  });

  const [testimonialsState, setTestimonials] = useState<Testimonial[]>(() => {
      if (typeof window !== 'undefined') {
          const saved = localStorage.getItem('lifemac_testimonials');
          if (saved) return JSON.parse(saved);
      }
      return testimonials.map((t, i) => ({
        ...t,
        id: `test-${i}`,
        program: 'General',
        status: 'published',
        date: new Date().toISOString()
      } as Testimonial));
  });

  const [partners, setPartners] = useState<Partner[]>(() => {
      if (typeof window !== 'undefined') {
          const saved = localStorage.getItem('lifemac_partners');
          if (saved) return JSON.parse(saved);
      }
      return currentPartners;
  });

  // Persist to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('lifemac_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('lifemac_stories', JSON.stringify(stories));
  }, [stories]);

  useEffect(() => {
    localStorage.setItem('lifemac_team', JSON.stringify(team));
  }, [team]);
  
  useEffect(() => {
    localStorage.setItem('lifemac_testimonials', JSON.stringify(testimonialsState));
  }, [testimonialsState]);

  useEffect(() => {
    localStorage.setItem('lifemac_partners', JSON.stringify(partners));
  }, [partners]);


  // Actions
  const addEvent = (event: Event) => {
    setEvents(prev => [...prev, event]);
  };

  const updateEvent = (updatedEvent: Event) => {
    setEvents(prev => prev.map(e => e.id === updatedEvent.id ? updatedEvent : e));
  };

  const deleteEvent = (id: string | number) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const addStory = (story: Story) => {
    setStories(prev => [...prev, story]);
  };

  const updateStory = (updatedStory: Story) => {
    setStories(prev => prev.map(s => s.id === updatedStory.id ? updatedStory : s));
  };

  const deleteStory = (id: string | number) => {
    setStories(prev => prev.filter(s => s.id !== id));
  };

  const addTeamMember = (member: TeamMember) => {
      setTeam(prev => [...prev, member]);
  };

  const updateTeamMember = (updatedMember: TeamMember) => {
      setTeam(prev => prev.map(m => m.id === updatedMember.id ? updatedMember : m));
  };

  const deleteTeamMember = (id: string | number) => {
      setTeam(prev => prev.filter(m => m.id !== id));
  };

  const addTestimonial = (testimonial: Testimonial) => {
      setTestimonials(prev => [...prev, testimonial]);
  };

  const updateTestimonial = (updatedTestimonial: Testimonial) => {
      setTestimonials(prev => prev.map(t => t.id === updatedTestimonial.id ? updatedTestimonial : t));
  };

  const deleteTestimonial = (id: string | number) => {
      setTestimonials(prev => prev.filter(t => t.id !== id));
  };


  return (
    <DataContext.Provider value={{
      events,
      stories,
      team,
      testimonials: testimonialsState,
      partners,
      addEvent,
      updateEvent,
      deleteEvent,
      addStory,
      updateStory,
      deleteStory,
      addTeamMember,
      updateTeamMember,
      deleteTeamMember,
      addTestimonial,
      updateTestimonial,
      deleteTestimonial
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
