# hello-canada App Testing

This repository contains Jest test cases for testing the [hello-canada](https://github.com/simonachkar/hello-canada) application.

## Test Case Descriptions

### App Component Tests

#### 1. Test: Initial Loading of Components
- **Description**: Validates that the App component performs an API call upon rendering and subsequently displays the data it receives.
- **Test Action**: The App component is rendered, and `waitFor` is used to wait for the text 'Ontario' to be displayed, confirming the mock API response.

#### 2. Test: Change to Territories View
- **Description**: Ensures that the 'Territories' menu item triggers a state change and possibly a new API call, resulting in updated data displayed.
- **Test Action**: The App component is rendered, the 'Territories' menu item is located and clicked, and placeholders are present for further assertions to confirm the UI or state change.

### Item Component Tests

#### 3. Test: Check Rendering of List Items
- **Description**: Confirms that the Item component correctly displays data passed through props and that the capital city is hidden by default.
- **Test Action**: The Item component is rendered with mock data to verify that 'Ontario' is displayed, the image source is accurate, and 'Toronto' is not visible until an action is taken to reveal it.

#### 4. Test: Check for Capital Toggle Button
- **Description**: Checks whether the Item component's button correctly toggles the visibility of the capital city.
- **Test Action**: The Item component is rendered, the toggle button is clicked to show and then hide the capital city, with visibility confirmed each time.

### List Component Tests

#### 5. Test: Rendering List of Items
- **Description**: Verifies that the List component renders an array of data as individual items.
- **Test Action**: The List component is rendered with mock data, and the presence of 'Ontario' and 'Quebec' in the document is confirmed.


