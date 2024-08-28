# Ionic Starter

This apps use Ionic v7.2.0 Running in NodeJS v20.16.0

## Install and Uninstall Ionic

```bash
# Install
npm install -g @ionic/cli

# Uninstall
npm uninstall -g ionic

# Create new project
ionic start

# Running project
ionic serve

# Build project
ionic build
```

## Deploy Native Project

source : https://ionicframework.com/docs/angular/your-first-app/deploying-mobile

```bash
# Create native project with capacitor
ionic cap add ios
or
ionic cap add android

# Copy changes project into native
ionic cap copy

# Sync project into native
ionic cap sync
```
