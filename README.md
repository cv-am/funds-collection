# Haitian National Funds Collection & Investor Platform (Fon Nasyonal Pou Ayiti)

An official, responsive, standalone single-page prototype for the Haitian National Funds Collection and Investor Platform. This platform allows citizens, diaspora members, and global partners to register their civic pledges, obtain official 6-digit investor identification numbers, track national development milestones, and simulate payment transfers with verified digital receipts.

---

## 🇭🇹 Overview & Mission

* **Theme:** National sovereignty, collective reconstruction, and economic empowerment.
* **Motto:** *"L'Union Fait La Force"* (Unity Makes Strength).
* **Architecture:** Standalone, pure HTML5, Vanilla CSS3, and Vanilla JavaScript with zero external UI framework dependencies.

---

## ✨ Key Features & Components

### 1. Navigation & Utility Toolbar
* **Multilingual Switcher:** Real-time localization toggle between **Kreyòl (HT)**, **Français (FR)**, and **English (EN)**.
* **Quick Utility Actions:** 
  * *Share this site* (Native Web Share API with clipboard fallback).
  * *Email this site* (Pre-formatted mailto link).
  * *News (Public)* (Smooth scroll to official announcements).
  * *Contact us* (Delegation contact modal).
* **Dynamic Authentication Flow:**
  * Interactive modal accepting **ID Number** and **Email / WhatsApp Phone**.
  * Dynamic transformation into **My Account** dropdown (**Edit Profile**, **Clear / Cancel**, **Save Changes**) and **Log Out**.

### 2. National Hero Section
* **Two-Column Responsive Grid:**
  * *Left:* Photographic placeholder container with national initiative branding.
  * *Right:* High-resolution SVG rendering of the Haitian National Flag and official Coat of Arms emblem with crossed cannons, Phrygian liberty cap, palm tree, and the national motto.

### 3. Dynamic Civic Duty & News Container
* **Default Notice:** Displays the official civic pledge advisory:
  > *"You don’t need to invest any money yet at this time but you can exercise your civic duty by signing up to participate and select the amount you wish to invest to liberate your country. Once the necessary requirement needed is met, we will contact you in an email or WhatsApp to complete the investment and you will receive a confirmation receipt with your ID number (with QR code)."*
* **Post-Registration State:** Dynamically swaps into the **"Investors News and Information"** bulletin board featuring dated cards and milestone reports.

### 4. Interactive 6-Tier Pledge Form
* **Supported Tiers:**
  1. `$20 - $200`
  2. `$300 - $500`
  3. `$600 - $800`
  4. `$900 - $1,000`
  5. `$1,100 - $5,000`
  6. `$5,100 or more`
* **Real-Time Interactive Behavior:**
  * Active rows highlight in Haitian Blue (`#00209F`) or Crimson Red (`#D21034`).
  * Typing into any tier input automatically checks the box and un-highlights any previously active tier.
  * Unchecking clears the numeric field and deselects the tier.
  * Live two-way synchronization with the investor profile form and payment preview section.

### 5. Potential Investor Profile Form
* **Fields:** First Name, Last Name, Email, WhatsApp Phone, Amount Selected (read-only real-time mirror), and Date (`YYYY-MM-DD`).
* **Registration Submission:**
  * Generates an official 6-digit Investor ID (e.g., `ID: 000101` / dynamic random).
  * Displays a pop-up confirmation card featuring the national emblem.
  * Replaces the civic duty section with the *Investors News and Information* container.
  * Automatically signs the user in to access their account.

### 6. Payment & Active Investor Card (State Preview)
* **Supported Methods:** Debit, Credit, Phone App (MonCash / Natcash), Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay.
* **Mock Checkout:** Fields for card name, expiration date, masked card number, amount, and date.
* **Transfer Execution:**
  * Action button transforms to a green **"✓ Transfer Successful"** state.
  * Generates an automated **Investor Receipt Card** with timestamp, masked card number (`Debit xxxx xxxx xxxx 8820`), transaction ID, and an SVG QR verification code.

---

## 🎨 Design & Color Palette

| Token | Hex Code | Description |
| :--- | :--- | :--- |
| `--haiti-blue` | `#00209F` | Official Haitian Royal Blue |
| `--haiti-blue-dark` | `#001566` | Deep Navy Blue for headers & hover states |
| `--haiti-blue-subtle` | `#EDF2FD` | Subtle blue tint for active rows & backgrounds |
| `--haiti-red` | `#D21034` | Official Haitian Crimson Red |
| `--haiti-red-dark` | `#A50B27` | Deep crimson for button focus & hover states |
| `--haiti-red-subtle` | `#FDF1F3` | Subtle red tint for alternating highlighted tiers |
| `--bg-page` | `#F4F6F9` | Page background neutral |
| `--card-bg` | `#FFFFFF` | Crisp card background |
| `--success-green` | `#10B981` | Verification & successful transfer green |

---

## 🚀 How to Run Locally

Because this project is completely standalone and contains zero external build dependencies:

### Option 1: Direct File Opening
Simply double-click [`index.html`](index.html) or open it directly in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Optional)
If you prefer running via a local dev server:

**Using Python:**
```bash
python -m http.server 3000
```
Then navigate to `http://localhost:3000`.

**Using Node.js (`npx serve`):**
```bash
npx serve .
```

---

## 📂 File Structure

```text
funds-collection/
├── index.html       # Standalone single-page prototype (HTML5, embedded CSS, vanilla JS)
└── README.md        # Complete documentation and project overview
```

---

## 📜 License & Integrity
Built for civic engagement, diaspora participation, and national reconstruction initiatives.
All SVG vectors and symbols are standard web vector graphics compatible with any browser environment.
