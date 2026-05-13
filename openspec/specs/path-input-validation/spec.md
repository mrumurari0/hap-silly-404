# path-input-validation Specification

## Purpose

TBD - created by archiving change reject-suspicious-path-input. Update Purpose after archive.

## Requirements

### Requirement: Suspicious path input validation

The serverless insult function SHALL validate optional path-style input before it can be used in any prompt-related logic.

#### Scenario: normal path input is accepted

Given a request with a normal path query value
When the serverless function validates the path input
Then the request should continue without returning a validation error

#### Scenario: script-like path input is rejected

Given a request with a path query value containing script-like content
When the serverless function validates the path input
Then the function should return safe fallback roast content

#### Scenario: prompt-injection path input is rejected

Given a request with a path query value containing a prompt-injection phrase
When the serverless function validates the path input
Then the function should return safe fallback roast content
