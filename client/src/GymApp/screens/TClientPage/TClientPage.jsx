import React, { useState } from 'react';
import styles from './TClientPage.module.css';

const TrainerUI = () => {
  const [activeView, setActiveView] = useState('dashboard'); // dashboard, clients, workouts
  const [selectedClient, setSelectedClient] = useState(null);
  const [activeTab, setActiveTab] = useState('upcoming'); // upcoming, completed, all

  // Get current date
  const today = new Date();
  const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });
  const date = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  
  // Sample data
  const clients = [
    { 
      id: 1, 
      name: 'Jeff Smith', 
      status: 'active', 
      initial: 'J',
      workouts: 3,
      nextSession: 'Tomorrow, 9:00 AM'
    },
    { 
      id: 2, 
      name: 'Bob Johnson', 
      status: 'Rest', 
      initial: 'B',
      workouts: 1,
      nextSession: 'Thursday, 5:30 PM'
    },
    { 
      id: 3, 
      name: 'Jon Davis', 
      status: 'Back, 60 minutes', 
      initial: 'J',
      workouts: 2,
      nextSession: 'Today, 4:00 PM'
    },
    { 
      id: 4, 
      name: 'Maria Chen', 
      status: 'active', 
      initial: 'M',
      workouts: 2,
      nextSession: 'Wednesday, 7:00 AM',
      avatarColor: 'avatarPurple'
    }
  ];

  const workouts = [
    { 
      id: 1, 
      title: 'Upper Body Strength',
      description: 'Focus on chest and back, high intensity',
      date: 'Today, 4:00 PM',
      client: 'Jon Davis',
      duration: '60 min'
    },
    { 
      id: 2, 
      title: 'Core & Cardio Circuit',
      description: 'HIIT session with core focus',
      date: 'Tomorrow, 9:00 AM',
      client: 'Jeff Smith',
      duration: '45 min'
    },
    { 
      id: 3, 
      title: 'Lower Body + Stretching',
      description: 'Legs and recovery session',
      date: 'Tomorrow, 11:30 AM',
      client: 'Jeff Smith',
      duration: '50 min'
    }
  ];

  // Stats data
  const stats = [
    { label: 'Active Clients', value: clients.filter(c => c.status === 'active').length },
    { label: 'Weekly Sessions', value: 12 },
    { label: 'This Month', value: 48 },
    { label: 'Completion Rate', value: '92%' }
  ];

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setActiveView('workouts');
  };

  const renderDashboard = () => (
    <>
      <div className={styles.dashboardHeader}>
        <div className={styles.dashboardTitle}>Trainer Dashboard</div>
      </div>
      
      <div className={styles.dateDisplay}>
        <span className={styles.weekday}>{weekday}</span>
        {date}
      </div>
      
      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.screenContainer}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>Today's Sessions</div>
          <div className={styles.viewAll} onClick={() => setActiveView('workouts')}>View All</div>
        </div>
        
        <div className={styles.workoutList}>
          {workouts.filter(w => w.date.includes('Today')).map(workout => (
            <div key={workout.id} className={styles.workoutItem}>
              <div className={styles.workoutHeader}>
                <div className={styles.workoutTitle}>{workout.title}</div>
                <div className={styles.workoutInfo}>
                  <span>{workout.client}</span> • <span>{workout.duration}</span>
                </div>
              </div>
              <div className={styles.workoutDate}>{workout.date.split(',')[1]}</div>
            </div>
          ))}
        </div>
        
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>Clients</div>
          <div className={styles.viewAll} onClick={() => setActiveView('clients')}>View All</div>
        </div>

        <div className={styles.clientList}>
          {clients.slice(0, 3).map((client) => (
            <div 
              key={client.id} 
              className={styles.clientItem} 
              onClick={() => handleClientSelect(client)}
            >
              <div className={styles.clientInfo}>
                <div className={`${styles.avatar} ${client.avatarColor ? styles[client.avatarColor] : 
                  client.initial === 'J' ? styles.avatar : 
                  client.initial === 'B' ? styles.avatarBlue : 
                  styles.avatarPurple}`}>
                  <div className={styles.avatarInitials}>{client.initial}</div>
                </div>
                <div className={styles.clientDetails}>
                  <div className={styles.clientName}>{client.name}</div>
                  <div className={styles.clientStatus}>
                    {client.nextSession}
                  </div>
                </div>
              </div>
              <div className={styles.clientWorkouts}>
                {client.workouts} workouts
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderClientList = () => (
    <div className={styles.screenContainer}>
      <div className={styles.header}>
        <div className={styles.title}>Clients</div>
      </div>
      
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitle}>All Clients ({clients.length})</div>
      </div>
      
      <div className={styles.clientList}>
        {clients.map((client) => (
          <div 
            key={client.id} 
            className={styles.clientItem} 
            onClick={() => handleClientSelect(client)}
          >
            <div className={styles.clientInfo}>
              <div className={`${styles.avatar} ${client.avatarColor ? styles[client.avatarColor] : 
                client.initial === 'J' ? styles.avatar : 
                client.initial === 'B' ? styles.avatarBlue : 
                styles.avatarPurple}`}>
                <div className={styles.avatarInitials}>{client.initial}</div>
              </div>
              <div className={styles.clientDetails}>
                <div className={styles.clientName}>{client.name}</div>
                {client.status !== 'active' ? (
                  <div className={styles.clientStatus}>{client.status}</div>
                ) : (
                  <div className={styles.clientStatus}>Next: {client.nextSession}</div>
                )}
              </div>
            </div>
            <div className={styles.clientWorkouts}>
              {client.workouts} workouts
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWorkouts = () => {
    // If client is selected, show just their workouts
    const filteredWorkouts = selectedClient 
      ? workouts.filter(w => w.client === selectedClient.name)
      : workouts;
    
    return (
      <div className={styles.screenContainer}>
        <div className={styles.header}>
          <div className={styles.title}>
            {selectedClient ? `${selectedClient.name}'s Workouts` : 'All Workouts'}
          </div>
        </div>
        
        <div className={styles.tabs}>
          <div 
            className={`${styles.tab} ${activeTab === 'upcoming' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </div>
          <div 
            className={`${styles.tab} ${activeTab === 'completed' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </div>
          <div 
            className={`${styles.tab} ${activeTab === 'all' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </div>
        </div>
        
        <div className={styles.workoutList}>
          {filteredWorkouts.map((workout) => (
            <div key={workout.id} className={styles.workoutItem}>
              <div className={styles.workoutHeader}>
                <div className={styles.workoutTitle}>{workout.title}</div>
                <div className={styles.workoutInfo}>
                  {!selectedClient && <span>{workout.client}</span>} 
                  {!selectedClient && ' • '} 
                  <span>{workout.duration}</span>
                </div>
              </div>
              <div className={styles.workoutDate}>{workout.date}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.app}>
      <div className={styles.navbar}>
        <div className={styles.logo}>GymMap Client Manager</div>
        <div className={styles.navActions}>
          <button 
            className={styles.iconButton}
            onClick={() => {
              setActiveView('dashboard');
              setSelectedClient(null);
            }}
          >
            Dashboard
          </button>
          <button 
            className={styles.iconButton}
            onClick={() => {
              setActiveView('clients');
              setSelectedClient(null);
            }}
          >
            Clients
          </button>
          <button 
            className={styles.iconButton}
            onClick={() => {
              setActiveView('workouts');
              setSelectedClient(null);
            }}
          >
            Workouts
          </button>
        </div>
      </div>
      
      {activeView === 'dashboard' && renderDashboard()}
      {activeView === 'clients' && renderClientList()}
      {activeView === 'workouts' && renderWorkouts()}
      
      <button className={styles.addButton}>+</button>
    </div>
  );
};

export default TrainerUI;