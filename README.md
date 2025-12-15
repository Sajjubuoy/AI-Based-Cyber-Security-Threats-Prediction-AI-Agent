# 🛡️ CyberShield AI  
### Welcome to my AI-Based Cyber Security Threat Prediction AI Agent

**A Comprehensive Cybersecurity Threat Prediction & Monitoring System**

CyberShield AI is an intelligent web application that leverages **Artificial Intelligence** to detect, analyze, and mitigate potential cybersecurity threats in **real time**.  
It provides multiple **specialized dashboards** for different data sources, using **interactive visualizations** to monitor network health, ML model performance, and live threat streams.

---

## 🏗️ System Architecture

<p align="center">
  <img 
    src="https://github.com/user-attachments/assets/9068fc64-300c-4699-9531-61283803d856"
    alt="CyberShield AI System Architecture"
    width="900"
  />
</p>

<p align="center"><i>High-level architecture of the CyberShield AI threat detection and monitoring system</i></p>

---

## 🚀 Live Demo & Project Walkthrough

- 🔴 **Live Application**  
  👉 [View CyberShield AI on Render](https://ai-based-cyber-security-threats-heyd.onrender.com)

### 🎥 Project Walkthrough (Demo Video)

https://github.com/user-attachments/assets/7a0501ac-a677-4586-9615-573f9bb1d4bd

---

## 🌟 Key Features

### 📊 Interactive Data Visualization
Powered by **Recharts**, the application converts complex security data into actionable insights:

- **Line Charts:** Monitor network traffic trends and real-time streams  
- **Pie Charts:** Visualize threat distribution and protocol analysis  
- **Bar Charts:** Compare threat severity levels and ML model accuracy  
- **Area Charts:** Track bandwidth usage and traffic pattern analysis  

---

### 🖥️ Specialized Dashboards

#### 🏠 1. Home Dashboard
- Central hub for real-time threat monitoring  
- Auto-refreshing metrics, system health indicators, and live traffic charts  

#### 📁 2. Static Data Dashboard
- Analyze historical datasets for anomaly detection  
- Upload `.csv / .json` files and export analysis results  

#### 🔄 3. Streaming Data Dashboard
- Simulated real-time network environment  
- Pause/Resume live streams with status indicators  

#### 🤖 4. ML (Machine Learning) Dashboard
- Train and monitor AI models  
- Batch retraining (**Retrain All**) and real-time accuracy tracking  

#### 🌐 5. Network VPN / WiFi Dashboard
- Monitor VPN connection and bandwidth usage  
- Network scanning and protocol distribution analysis  

#### 📄 6. Threat Reports
- Generate downloadable security reports  
- Historical threat analysis and security recommendations  

---

## 🛠️ Tech Stack

- **Build Tool:** Vite  
- **Language:** TypeScript  
- **Frontend:** React  
- **Backend / Auth / DB:** Supabase  
- **Styling:** Tailwind CSS  
- **UI Components:** shadcn/ui, Radix UI  
- **Charts:** Recharts  
- **Icons:** Lucide React  
- **Notifications:** Sonner  
- **Deployment:** Render  

---

## 📌 Agile Documentation

📥 **Agile Project Document (Excel)**  
👉 [Download Agile Document](Agile%20document%20group1.xls)

---

## 📂 Project Structure

```bash
├── README.md                 # Documentation
├── components.json           # Component library configuration
├── eslint.config.js          # ESLint configuration
├── index.html                # Entry file
├── package.json              # Package management
├── postcss.config.js         # PostCSS configuration
├── public                    # Static resources
│   ├── favicon.png
│   └── images
├── src                       # Source code
│   ├── App.tsx               # App entry
│   ├── components            # Reusable components
│   ├── context               # Global context
│   ├── db                    # Database configuration
│   ├── hooks                 # Custom hooks
│   ├── index.css             # Global styles
│   ├── layout                # Layout components
│   ├── lib                   # Utility functions
│   ├── main.tsx              # Main entry
│   ├── routes.tsx            # Routing
│   ├── pages                 # Application pages
│   ├── services              # API / DB interaction
│   ├── types                 # Type definitions
├── tsconfig.app.json         # TypeScript frontend config
├── tsconfig.json             # TypeScript base config
├── tsconfig.node.json        # Node config
└── vite.config.ts            # Vite configuration
