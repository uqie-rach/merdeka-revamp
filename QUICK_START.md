# Quick Start Guide

## Getting Started

### Installation
```bash
# Clone the repository
git clone https://github.com/uqie-rach/merdeka-revamp.git

# Change to the project directory
cd merdeka-revamp
```

```bash
# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Docker Setup

```bash
# Build the Docker image
docker build -t merdeka-revamp .
# Run the Docker container
docker run -p 3000:3000 merdeka-revamp
```