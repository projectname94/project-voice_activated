# States of Feedback

An i/o interaction contains 5 distinct states

1. Show ready state
2. Begin input
3. Acknowledge received input
4. Show output
5. Error state

## 1. Showing Ready State
Before a user can begin an interaction they need to know that the computer is listening and that they will be acknoledged. Apple's Siri interface uses an audio cue to indicate it is ready.

## 2. Begin an input
While a user is speaking to their device, should there be some sort of indication that they are being listened to? Siri provides a subtle animation

## 3. Acknowledge received input
After the input has been completed there is an indication that it is being processed. Siri will display the text that it is processing on your screen to show you what it is responding too.

## 4. Show output
Outputs can exist in many forms, Siri will both dictate part of it's response and show additional options on the screen.

## 5. Error state
Simply put, error states should indicate to a user that their interaction cannot be completed. However, in speech based interfaces, there is the possibility of the error state to be non-intrusive to the interaction. Siri will in some instances opt to google what you have said if it doesn't understand or cannot perform your requested command.