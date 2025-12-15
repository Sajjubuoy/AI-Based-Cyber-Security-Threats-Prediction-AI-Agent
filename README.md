



# 🛡️ CyberShield AI

**A Comprehensive Cybersecurity Threat Prediction & Monitoring System**

CyberShield AI is an intelligent web application leveraging Artificial Intelligence to detect, analyze, and mitigate potential cyber security threats in real-time. The application features multiple specialized dashboards for different data sources, using interactive visualizations to track network health, ML model performance, and live threat streams.

---

## 🚀 Live Demo & Video

* **🔴 Live Application:** [**Click here to view CyberShield AI on Render**](https://ai-based-cyber-security-threats-heyd.onrender.com)
* **🎥 Project Walkthrough:** 

* https://github.com/user-attachments/assets/7a0501ac-a677-4586-9615-573f9bb1d4bd
---

## 🌟 Key Features

### 📊 Interactive Data Visualization
Powered by **Recharts**, the application translates complex security data into actionable insights:
* **Line Charts:** Monitor network traffic trends and real-time streams.
* **Pie Charts:** Visualize threat distribution and protocol analysis.
* **Bar Charts:** Compare threat severity levels and ML model accuracy.
* **Area Charts:** Track bandwidth usage and analyzing patterns.

### 🖥️ Specialized Dashboards

#### 1. Home Dashboard
* Central hub for real-time threat monitoring.
* **Features:** Auto-refreshing metrics, system health indicators, and traffic visualization charts.

#### 2. Static Data Dashboard
* Analyze historical datasets for patterns.
* **Features:** Upload `.csv/.json` datasets, run analysis algorithms, and export results.

#### 3. Streaming Data Dashboard
* Simulates real-time network environments.
* **Features:** Pause/Resume live streams, live status indicators, and real-time traffic monitoring.

#### 4. ML (Machine Learning) Dashboard
* Manage and monitor AI models.
* **Features:** Train individual models, batch retraining ("Retrain All"), and track accuracy metrics in real-time.

#### 5. Network VPN/WiFi Dashboard
* Monitor connection status and bandwidth.
* **Features:** VPN Toggle (Connect/Disconnect), network scanning, and protocol distribution analysis.

#### 6. Threat Reports
* Generate comprehensive security summaries.
* **Features:** Downloadable text reports, historical threat analysis, and security recommendations.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React 18 with TypeScript
* **Styling:** Tailwind CSS
* **UI Components:** shadcn/ui & Radix UI
* **Visualization:** Recharts
* **Icons:** Lucide React
* **Notifications:** Sonner (Toast notifications)
* **Build Tool:** Vite
* **Deployment:** Render

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── security/
│   │   ├── ThreatLineChart.tsx      # Time-series visualization
│   │   ├── ThreatPieChart.tsx       # Distribution visualization
│   │   ├── ThreatBarChart.tsx       # Categorical comparison
│   │   ├── ThreatAreaChart.tsx      # Trend analysis
│   │   ├── MetricCard.tsx           # KPI display
│   │   └── AlertBanner.tsx          # Critical notifications
│   └── common/
│       ├── Header.tsx
│       └── Footer.tsx
├── pages/
│   ├── Home.tsx                     # Main dashboard
│   ├── StaticDataDashboard.tsx      # File upload & analysis
│   ├── StreamingDataDashboard.tsx   # Real-time simulation
│   ├── MLDashboard.tsx              # Model training interface
│   ├── NetworkDashboard.tsx         # VPN & WiFi controls
│   └── ThreatReports.tsx            # Reporting system
├── lib/
│   └── utils/                       # Generators for simulation data
└── types/                           # TypeScript definitions
