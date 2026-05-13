## ADDED Requirements

### Requirement: Personality profiles are available for selection

The system SHALL provide at least three predefined personality profiles that users can choose from. Each profile has a distinct name and description.

#### Scenario: Profiles are accessible

- **WHEN** a user loads the homepage
- **THEN** a dropdown or selector shows available personality options (e.g., "Friendly HAP", "Sarcastic HAP", "Technical HAP")

#### Scenario: Default personality is set

- **WHEN** a user visits the homepage for the first time
- **THEN** a default personality is selected (e.g., "Friendly HAP")

### Requirement: User can select a personality profile

The system SHALL allow users to change the active personality by selecting from available options in the selector UI.

#### Scenario: User selects a personality

- **WHEN** a user changes the dropdown selection to a different personality
- **THEN** the selected personality becomes active

#### Scenario: Personality selection is immediately visible

- **WHEN** a user selects a personality
- **THEN** the UI reflects the selection (e.g., dropdown shows the newly selected option)

### Requirement: Selected personality persists across sessions

The system SHALL save the user's selected personality to browser storage so it survives page navigation and browser close/reopen.

#### Scenario: Preference survives page reload

- **WHEN** a user selects a personality and reloads the page
- **THEN** the previously selected personality is restored

#### Scenario: localStorage is unavailable

- **WHEN** browser storage is disabled or unavailable
- **THEN** the selector still functions but defaults to the default personality on next page load

### Requirement: Selector is accessible

The system SHALL implement the selector with semantic HTML and proper labels so it is usable by assistive technologies.

#### Scenario: Selector has clear label

- **WHEN** a user with a screen reader accesses the homepage
- **THEN** the selector is announced with a descriptive label (e.g., "HAP Personality")

#### Scenario: Selector is keyboard navigable

- **WHEN** a user navigates using only the keyboard
- **THEN** the selector can be reached via Tab and operated via arrow keys and Enter
