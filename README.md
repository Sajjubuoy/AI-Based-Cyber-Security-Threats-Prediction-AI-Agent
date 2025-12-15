# 🛡️ CyberShield AI

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

### 🎥 Project Walkthrough

https://github.com/user-attachments/assets/7a0501ac-a677-4586-9615-573f9bb1d4bd


---

## 🌟 Key Features

### 📊 Interactive Data Visualization
Powered by **Recharts**, the application converts complex security data into actionable insights:

- **Line Charts:** Monitor network traffic trends and real-time streams  
- **Pie Charts:** Visualize threat distribution and protocol analysis  
- **Bar Charts:** Compare threat severity levels and ML model accuracy  
- **Area Charts:** Track bandwidth usage and pattern analysis  

---

### 🖥️ Specialized Dashboards

#### 🏠 1. Home Dashboard
- Central hub for real-time threat monitoring  
- **Features:** Auto-refreshing metrics, system health indicators, and traffic visualization  

#### 📁 2. Static Data Dashboard
- Analyze historical datasets for anomaly detection  
- **Features:** Upload `.csv / .json` files, run analysis algorithms, export results  

#### 🔄 3. Streaming Data Dashboard
- Simulates real-time network environments  
- **Features:** Pause/Resume streams, live status indicators, traffic monitoring  

#### 🤖 4. ML (Machine Learning) Dashboard
- Manage and monitor AI models  
- **Features:**  
  - Train individual models  
  - Batch retraining (**Retrain All**)  
  - Real-time accuracy tracking  

#### 🌐 5. Network VPN / WiFi Dashboard
- Monitor connection status and bandwidth usage  
- **Features:** VPN connect/disconnect, network scanning, protocol analysis  

#### 📄 6. Threat Reports
- Generate comprehensive security summaries  
- **Features:** Downloadable reports, historical threat analysis, security recommendations  

---

## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript  
- **Styling:** Tailwind CSS  
- **UI Components:** shadcn/ui, Radix UI  
- **Charts & Visualization:** Recharts  
- **Icons:** Lucide React  
- **Notifications:** Sonner (Toast notifications)  
- **Build Tool:** Vite  
- **Deployment:** Render  

---

## 📌 Agile Documentation

📥 **Agile Project Document (Excel)**  
👉 [Download Agile Document](Agile%20document%20group1.xls)

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── security/
│   │   ├── ThreatLineChart.tsx    # Time-series visualization
│   │   ├── ThreatPieChart.tsx     # Distribution visualization
│   │   ├── ThreatBarChart.tsx     # Categorical comparison
│   │   ├── ThreatAreaChart.tsx   # Trend analysis
│   │   ├── MetricCard.tsx        # KPI display
