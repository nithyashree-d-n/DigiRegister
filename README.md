# 📘 DigiRegister

### An Offline-First Digital Register for College Bookstores

DigiRegister is a user-centric, offline-first web application designed to digitize daily sales recording in college bookstores while preserving the simplicity of traditional handwritten registers. It automates calculations, ensures data safety, and works even without an internet connection — all at zero cost.

---

## 💡 How I Got This Idea

This project began with a simple observation at my college bookstore.

The staff managed daily sales using a handwritten register:

* Quantities were recorded using +1, +2, +3 marks
* Payments were tracked separately for Cash and UPI

While effective, this manual system required repetitive effort and end-of-day calculations that were time-consuming and prone to mistakes.

Instead of replacing their workflow, I aimed to **support it using technology** — keeping the process familiar while making it faster, more organized, and more reliable.

This led to the creation of **DigiRegister**, a digital solution that respects existing habits while improving efficiency.

---

## 📄 Problem Statement

* Sales are recorded manually using tally marks (+1, +2, +3)
* Cash and UPI payments are tracked separately by hand
* End-of-day totals take time and can lead to errors
* Internet availability is unreliable
* The system should work on basic computers and mobile devices
* Must be:

  * Zero-cost
  * Easy to use
  * Independent of the developer for future use

---

## 🚀 Core Idea

To build a **web-based, offline-first digital register** that:

* Behaves like the traditional paper register
* Automates counting, accounting, and reporting
* Works reliably without internet

---

## 🔄 Overall Flow

1. User opens the web application (desktop, laptop, or mobile)
2. Logs in using Gmail-based authentication
3. Access is granted based on role (Owner or Staff)
4. Main screen displays:

   * Item list
   * Quantity buttons (+1, +2, +3)
   * Payment options (Cash / UPI)
5. Each click:

   * Records the sale instantly
   * Saves data locally
6. Data syncs automatically when internet is available
7. Reports can be exported anytime (Excel, PDF, Word)
8. All settings are customizable by the user

---

## 🎨 User Experience Philosophy

Designed for non-technical users:

* One main screen for daily work
* Large, clear buttons
* Minimal text
* No unnecessary pop-ups
* No compulsory typing
* Clean layout with subtle colors
* Smooth performance even when switching tabs

---

## 🧾 Main Functional Screen (Sales Entry)

Displays:

* Current date and time (auto-updated)
* Logged-in user name
* Table of items

For each item:

* ➕ +1, +2, +3 quantity buttons
* 💰 Cash payment button
* 📱 UPI payment button

➡️ One click = one action (faster than writing in a register)

---

## 📦 Offline-First Data Handling

Offline support is a **core feature**:

* Every sale is saved immediately in **IndexedDB**
* Data remains safe if:

  * Internet is unavailable
  * Browser is closed
  * System is shut down

When online:

* Automatic background sync to backend
* No manual sync required

📌 Local database acts as the **source of truth**

---

## 👥 Multi-User & Authentication

* Gmail-based authentication (Google OAuth)
* No passwords to remember

### Roles

**Owner (Admin):**

* Full access
* Settings
* User management
* Reports

**Staff:**

* Sales entry only

### User Flow

* New users request access
* Owner approves/rejects from Settings panel

---

## ⚙️ Settings & Customization (Developer-Independent)

All managed through a Settings panel:

* Add/remove items
* Enable/disable quantity buttons (+1, +2, +3, +5, etc.)
* Manage users and roles
* Choose report formats
* Customize UI preferences

🧩 All configurations are stored as data — not hard-coded

---

## 📊 Reports & End-of-Day Accounting

User-controlled report generation:

* Select date or date range
* Choose format:

  * Excel (CSV/XLSX)
  * PDF
  * Word (DOCX)

### Includes:

* Total cash amount
* Total UPI amount
* Item-wise sales count
* Timestamped summary

---

## 📱 Mobile Support

Fully responsive web app:

* Desktop → Table layout
* Mobile → Card layout with large touch buttons

Mobile usage serves as backup/emergency option.

---

## 🛠️ Technology Stack (Zero-Cost)

| Component       | Technology                              |
| --------------- | --------------------------------------- |
| Frontend        | HTML, CSS, JavaScript                   |
| App Type        | Progressive Web App (PWA)               |
| Offline Storage | IndexedDB                               |
| Authentication  | Google OAuth (Free tier)                |
| Backend         | Free serverless backend (optional)      |
| Reports         | Browser-based export (PDF, Excel, Word) |

💰 No subscriptions. No paid services.

---

## ❤️ Why DigiRegister Is User-Centric

* Preserves existing workflow
* Faster than manual entry
* No fear of technology
* Works without internet
* Users own their data
* No developer dependency

---

## 📌 Conclusion

DigiRegister is not just a software solution — it is a **behavior-respecting digital system**.

By observing a real-world problem and understanding user habits deeply, this project delivers:

* Offline-first reliability
* Zero-cost accessibility
* Customizable functionality
* Simple, empathetic design

It proves that effective technology does not need to be complex — only **practical, reliable, and human-centered**.
