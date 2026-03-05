# serve-local-ny

A repository for serving local New York data and content. Currently in initial development phase.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Repository Status

**CURRENT STATE**: This repository is in its initial phase and contains minimal implementation:
- Only README.md file with basic project name
- No source code, dependencies, or build system yet
- No tests, linting, or CI/CD pipelines configured
- No package.json, requirements.txt, or other dependency files

## Working Effectively

### Initial Repository Validation
- Always start by checking the current repository state:
  - `ls -la` to see what files exist
  - `git status` to check current branch and changes
  - `find . -name "package.json" -o -name "requirements.txt" -o -name "Dockerfile" -o -name "*.config.*"` to look for project configuration files

### When Code Is Added (Future Development)
Based on the repository name "serve-local-ny", this project will likely become:
- A web server/API for serving New York-related data
- Possibly a Node.js/Express application, Python Flask/FastAPI, or similar
- May include frontend components for data visualization

**When build files are added, follow these patterns:**

#### For Node.js Projects:
- `npm install` -- NEVER CANCEL. Set timeout to 10+ minutes for large projects.
- `npm run build` -- NEVER CANCEL. Can take 5-45 minutes depending on project size. Set timeout to 60+ minutes.
- `npm run test` -- NEVER CANCEL. Set timeout to 30+ minutes.
- `npm run dev` to start development server
- `npm run start` for production server

#### For Python Projects:
- `pip install -r requirements.txt` -- NEVER CANCEL. Set timeout to 15+ minutes.
- `python -m pytest` -- NEVER CANCEL. Set timeout to 30+ minutes.
- `python app.py` or similar to start the server
- `flask run` or `uvicorn main:app` for web frameworks

#### For Docker Projects:
- `docker build .` -- NEVER CANCEL. Can take 10-60 minutes. Set timeout to 90+ minutes.
- `docker-compose up` -- NEVER CANCEL. Set timeout to 30+ minutes.

### Validation Requirements

**CRITICAL: ALWAYS manually validate any changes through complete user scenarios:**

#### For Web Applications:
- Start the server using the appropriate command
- Navigate to the application URL (typically http://localhost:3000 or similar)
- Test at least one complete end-to-end user workflow
- Take screenshots of the running application to verify functionality
- Test API endpoints with curl or similar tools if it's an API

#### For CLI Applications:
- Run `./app --help` or equivalent to verify basic functionality
- Execute the main use case with sample data
- Verify output files or results are generated correctly

#### Current Validation (Empty Repository):
- Verify README.md exists and contains project name
- Confirm no build artifacts or dependency files exist yet
- Check that git repository is properly initialized

## Development Patterns to Establish

When adding code to this repository:

### Always Include:
- `package.json` (Node.js) or `requirements.txt` (Python) with exact version pinning
- `.gitignore` file appropriate for the technology stack
- `README.md` with setup, build, and run instructions
- Basic test suite with at least one test
- Linting configuration (ESLint for Node.js, flake8/black for Python)

### Always Run Before Committing:
- Full build process: `npm run build` or equivalent -- NEVER CANCEL. Set timeout to 60+ minutes.
- Complete test suite: `npm test` or `python -m pytest` -- NEVER CANCEL. Set timeout to 30+ minutes.
- Linting: `npm run lint` or `flake8 .` -- Set timeout to 10+ minutes.
- Manual validation of the primary user scenario

### Expected Build Times (When Added):
- **Initial setup**: 5-15 minutes for dependency installation
- **Build process**: 5-45 minutes depending on complexity
- **Test suite**: 5-30 minutes depending on test coverage
- **Linting**: 1-5 minutes

**NEVER CANCEL builds or tests. Always wait for completion and set appropriate timeouts.**

## Common Tasks

### Current Repository State
```bash
ls -la /home/runner/work/serve-local-ny/serve-local-ny
# Output:
# .git/
# .github/
# README.md
```

### Git Status Check
```bash
git status
# Expected: Clean working directory on copilot/fix-5 or main branch
```

### README Content
```bash
cat README.md
# Output:
# # serve-local-ny
```

## Future Development Guidance

When implementing the serve-local-ny application:

1. **Technology Stack Decision**: Choose appropriate stack (Node.js + Express, Python + Flask/FastAPI, etc.)
2. **Data Source Integration**: Implement connection to New York data sources (APIs, databases, static files)
3. **API Design**: Create RESTful endpoints for serving local NY data
4. **Testing Strategy**: Implement unit tests, integration tests, and API endpoint tests
5. **Deployment**: Add Docker configuration and CI/CD pipelines
6. **Documentation**: Update README with comprehensive setup and usage instructions

### Recommended Project Structure (Future):
```
serve-local-ny/
├── src/           # Source code
├── tests/         # Test files
├── docs/          # Documentation
├── data/          # NY data files or schemas
├── config/        # Configuration files
├── scripts/       # Build and deployment scripts
└── README.md      # Updated with full instructions
```

## Critical Reminders

- **NEVER CANCEL** any build, test, or installation commands
- **ALWAYS** set timeouts of 60+ minutes for builds, 30+ minutes for tests
- **ALWAYS** manually test functionality after making changes
- **ALWAYS** run linting before committing changes
- When in doubt about repository state, check git status and list files first
- For an empty repository like this, focus on establishing good patterns for future development