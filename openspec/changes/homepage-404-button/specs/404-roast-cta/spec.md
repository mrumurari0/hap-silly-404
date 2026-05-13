## ADDED Requirements

### Requirement: Homepage includes 404 roast call-to-action

The homepage (index.html) SHALL include a prominently displayed button that allows visitors to navigate to the 404 page and experience the roast feature.

#### Scenario: Button is present on homepage

- **WHEN** a user loads the homepage
- **THEN** a button labeled "Try the 404 Roast" is visible in the hero section

#### Scenario: Button navigates to 404 page

- **WHEN** a user clicks the button
- **THEN** the browser navigates to the /404 page in the same tab

#### Scenario: Button has accessible markup

- **WHEN** a user with a screen reader loads the homepage
- **THEN** the button is announced as a link with accessible text describing its purpose

#### Scenario: Button styling is consistent

- **WHEN** a user views the button
- **THEN** it uses colors and typography from the site's design system (--hap-\* custom properties)
