#!/bin/bash

# Post-start script for devcontainer initialization
echo "🚀 Starting serve-local-ny devcontainer initialization..."

# Install dependencies
echo "📦 Installing Node.js dependencies..."
npm install

# Start PostgreSQL service
echo "🐘 Starting PostgreSQL database..."
docker-compose up -d postgres

# Wait for PostgreSQL to be ready
echo "⏳ Waiting for PostgreSQL to be ready..."
until docker-compose exec postgres pg_isready -U postgres; do
  sleep 2
done

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npx prisma generate

# Push database schema
echo "📊 Pushing database schema..."
npx prisma db push --accept-data-loss

# Seed the database
echo "🌱 Seeding database with initial data..."
npm run db:seed

echo "✅ Devcontainer initialization complete!"
echo ""
echo "🎯 Your NY National Guard recruitment platform is ready!"
echo "📝 Run 'npm run dev' to start the development server"
echo "🔍 Run 'npm run db:studio' to explore the database"
echo ""