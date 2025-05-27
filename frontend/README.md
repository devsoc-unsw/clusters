# Clusters Frontend

Clusters, event management and discovery. 

## Tech Stack

- **Framework**: React Native with Expo (~52.0.33)
- **Language**: TypeScript
- **Navigation**: Expo Router with file-based routing  
- **Database**: Supabase integration
- **Package Manager**: Bun
- **Testing**: Jest with jest-expo

## Quick Start

```bash
# Install dependencies
bun install

# Start development server
bunx expo start

# Run on specific platforms
bunx expo start --ios
bunx expo start --android
bunx expo start --web
```

## Project Structure

```
frontend/
├── app/                    # File-based routing
│   ├── (tabs)/            # Tab navigation routes
│   ├── auth/              # Authentication screens
│   ├── events/            # Event management screens
│   ├── onboarding/        # User onboarding flow
│   └── settings/          # App settings
├── components/            # Reusable UI components
│   ├── common/            # Shared components (Button, Input)
│   └── ui/                # Platform-specific UI components
├── features/              # Feature-based organization
│   ├── auth/              # Authentication logic
│   ├── events/            # Event management
│   ├── onboarding/        # Onboarding flow
│   ├── settings/          # Settings management
│   └── societies/         # Society-related features
├── lib/                   # Core utilities
│   ├── supabase/          # Database integration
│   └── types/             # Shared type definitions
└── hooks/                 # Custom React hooks
```

## Key Features

- **Event Discovery**: Browse and search for events
- **Event Management**: Create, join, and manage events
- **Authentication**: Sign in/up with Supabase
- **User Onboarding**: Guided setup for new users
- **Account Settings**: Profile and preference management
- **Themed UI**: Consistent styling with light/dark mode support

## Development

### Environment Setup

1. Copy environment variables:
```bash
cp .env.example .env
```

2. Configure Supabase credentials in `.env`

### Available Scripts

```bash
bunx expo start        # Start Expo development server
bunx expo start --android  # Run on Android device/emulator
bunx expo start --ios      # Run on iOS device/simulator
bunx expo start --web      # Run in web browser
bun run test           # Run tests with Jest
bun run lint           # Run ESLint
```

### Code Organization

- **Features**: Organized by domain in `features/` directory
- **Components**: Themed components for consistent styling
- **Types**: TypeScript interfaces in feature-specific `types/` folders
- **Hooks**: Custom hooks for feature-specific logic

### Routing

Uses Expo Router with file-based routing:

- `/` - Discovery feed (tabs)
- `/explore` - Event search (tabs)
- `/auth/sign-in` - Authentication
- `/auth/sign-up` - Registration
- `/events/create` - Event creation
- `/events/[id]` - Event details
- `/settings` - Account settings
- `/onboarding` - User onboarding

## Supabase Integration

- Client configuration: `lib/supabase/client.ts`
- Authentication: `lib/supabase/auth.ts`
- Event management: `lib/supabase/events.ts`