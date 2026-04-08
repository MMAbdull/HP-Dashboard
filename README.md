# HP Dashboard

A modern fitness and health tracking dashboard built with React and Tailwind CSS.

HP Dashboard is a frontend-focused project that simulates a complete fitness platform experience — combining workout tracking, analytics, scheduling, and user management into one unified interface.

---

## 🚀 Overview

This project represents the **foundation of a much larger product**.

The long-term vision is to build a full fitness ecosystem that helps users:
- Track workouts
- Analyze performance
- Stay consistent
- Improve through data and smart insights

> ⚠️ Note: This version is a **frontend-only implementation** using static data.

---

## 📸 Screenshots

### 🏠 Home Dashboard
![Home Dashboard](/screenshots/homedashboard1.png)

### 📊 Analytics
![Analytics](/screenshots/analytics1.png)

### 📰 News
![News](/screenshots/News1.png)

### 📅 Scheduler
![Scheduler](/screenshots/scheduale.png)

### 👤 Profile
![Profile 1](/screenshots/Profie1.png)
![Profile 2](/screenshots/Profie2.png)

### ⚙️ Settings
![Settings 1](/screenshots/settings1.png)
![Settings 2](/screenshots/settings2.png)
![Settings 3](/screenshots/settings3.png)
![Settings 4](/screenshots/settings4.png)

---

## 🚀 Features

### 🏠 Home Dashboard
- Centralized dashboard with quick access to key functionalities
- Create workouts and exercises instantly
- Access:
  - Weekly plans
  - Weekly progress overview
  - Today’s focus

---

### 📊 Analytics
- Interactive fitness analytics powered by Recharts
- Includes:
  - Workout Frequency Over Time
  - Training Type Breakdown
  - Calories Burned Over Time
  - Workout Category Share
  - Muscle Engagement Analysis
  - Workouts vs Calories Comparison
- Filtering system (based on static/demo data):
  - Time Range
  - Training Type
  - Muscle Group
  - Equipment

---

### 📰 News Integration
- Fitness and world news powered by NewsAPI
- Demonstrates API integration and data handling

---

### 📅 Workout Scheduler
- Plan and organize workouts and rest days
- Built using FullCalendar
- Supports:
  - Monthly view
  - Weekly planning
  - Daily scheduling
- Current implementation:
  - Workout events
  - Rest day tracking

---

### 👤 Profile Dashboard

#### Profile Header
- Profile picture
- Name & bio
- Followers / Following
- Total workouts
- Join date
- Edit & Share actions

#### Detailed Information
- Name, Email, Phone
- Age, Weight, Height
- Physique Transformation Type

---

### 📦 Widgets System

#### 📈 Stats Widget
- Total Rest Days
- Total Weight Lifted
- Total Workout Days

#### 🏋️ Workout Widget
- Workout progress tracking:
  - Not Started
  - In Progress
  - Completed
- Displays:
  - Exercises
  - Sets & reps
  - Estimated time

#### 📬 Activity Widget
- Calendar preview
- Daily activity overview
- Inbox/messages preview

---

### ⚙️ Settings System

#### 🎨 Preferences
- Change display name
- Theme customization
- Time format (12h / 24h)

#### 🏋️ Workout Settings
- Weight units (kg / lb)
- Rest timer
- Default sets & reps
- Workout reminders

#### 🔐 Profile Settings
- Account information
- Change email
- Change password
- Private account toggle
- Danger Zone:
  - Delete account
  - Logout

---

### 📱 Fully Responsive Design
- Optimized for all screen sizes:
  - Mobile
  - Tablet
  - Desktop
- Adaptive layouts for:
  - Dashboard
  - Profile
  - Widgets
  - Settings
- Mobile-first improvements across UI components

---

### 🚪 Logout Flow
- Custom logout screen
- Navigation-based (no backend authentication)

---

## ⚡ Tech Stack

### 🧩 Frontend
- React.js
- React Router
- Tailwind CSS

### 📊 Visualization
- Recharts

### 📅 Scheduling
- FullCalendar

### 🎞️ Animations
- Framer Motion

### 🌐 API
- NewsAPI

---

## 🧠 Development Approach

- Component-based architecture
- React Hooks for state management
- Context API for global state (settings)
- Clean and reusable components
- Separation of concerns (UI / logic / data)

---

### 📊 Data Handling
- Static/mock data used to simulate real-world scenarios
- Custom filtering system built with JavaScript
- Data transformed to work with charts and UI components

---

## ⚙️ Installation & Usage

### 1. Clone the repository
```bash
git clone https://github.com/your-username/HP-Dashboard.git
cd HP-Dashboard 