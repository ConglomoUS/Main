# Conglomo US

This repository contains the source code for my website, available at [https://conglomo.us](https://conglomo.us).

## Development Workflow (For Repo Owner)

### Pre-commit Validation Process

Before committing any changes, follow these steps:

1. **Build the site**
    ```bash
    mkdocs build --clean
    ```

2. **Start local development server**
    ```bash
    mkdocs serve
    ```

3. **Quality Assurance Checklist**
    
    Visit the test page at: http://127.0.0.1:8000
    
    Validate the following:
    - ✅ Page layout and styling appear appropriate
    - ✅ All links function correctly
    - ✅ Uploaded images display properly
    - ✅ Navigation menu works as expected

4. **Stop the development server**
    
    Press `CTRL + C` in the terminal

5. **Commit changes**
    
    Create a commit with a descriptive message documenting your changes.

6. **Deploy to GitHub Pages**
    ```bash
    mkdocs gh-deploy
    ```

7. **Check GitHub Actions**  
   
    In GitHub, check the Actions tab for a queued workflow. Wait till it completes and validate the site has been updated.

    > **Note**  
    > Please wait - GitHub Actions can take between 5-30 minutes to complete deployment. Do not run additional deployments while one is in progress.

