export {}




// export function Main() {
//     const lastKeyWasPressed = "lastKeyWasPressed";
//     const inProgress = "inProgress";
//     const wrongKeyWasPressed = "wrongKeyWasPressed";
//     const maxTaskID = 2;

//     class Job {
//         public jobTitle: string;
//         public totalTasksCompleted: number;
//         public currentTaskList: Array<JobTask>;
//         public jobTitleValueELement: JQuery<HTMLElement>;
//         public totalTasksCountElement: JQuery<HTMLElement>;
//         public currentTaskIndex: number;

//         constructor(
//             jobTitle: string,
//             totalTasksCompleted: number, 
//             currentTaskList: string) {
//             this.jobTitleValueELement = $("#JobTitleValue");
//             this.totalTasksCountElement = $("#TotalTasksCount");
//             this.currentTaskList = [];
//             this.jobTitle = "";
//             this.totalTasksCompleted = 0;


//             this.updateJobTitle(jobTitle);
//             this.updateTotalTasksCompleted(totalTasksCompleted);
//             this.updateCurrentTaskList(currentTaskList);
//             this.currentTaskIndex = 0;
//         }

//         pressKey(keyCode: string) {
//             let keyPressResult = this.currentTaskList[this.currentTaskIndex].pressKey(keyCode);
//             if (keyPressResult === lastKeyWasPressed) {
//                 this.finishTask(this.currentTaskIndex);
//             }
//             else if (keyPressResult === inProgress) {

//             }
//             else {
//                 // Wrong key was pressed

//             }
//         }

//         updateJobTitle(newJobTitle: string) {
//             this.jobTitle = newJobTitle;
//             this.jobTitleValueELement.html(newJobTitle);
//         }

//         updateTotalTasksCompleted(totalTasksCompleted: number) {
//             this.totalTasksCompleted = totalTasksCompleted;
//             this.totalTasksCountElement.html(totalTasksCompleted.toString());
//         }

//         updateCurrentTaskList(currentTaskList: Array<JobTask>) {
//             currentTaskList[0].activateTask();
//             this.currentTaskList = currentTaskList;
//             // for(let i = 0; i < maxTaskID; i++) {
                
                
//             // }
//         }

//         finishTask(taskID: number) {
//             let taskToFinish = this.currentTaskList.find(task => task.taskID === taskID);
//             taskToFinish.finish();
//             this.totalTasksCompleted++;
//             if (this.taskID + 1 > maxTaskID) {
//                 // Advance to the next day
//                 this.currentTaskList = this.generateNewTaskList();
//                 this.currentTaskIndex = 0;
                
//             }
//         }

//         generateNewTaskList() {
//             //TODO: Generate new task list
//             return [];
//         }
//     }

//     class JobTask {
//         public taskID: number;
//         constructor(taskID: number, taskName, taskDescription, requiredKeys) {
//             this.taskID = taskID;
//             this.taskName = taskName;
//             this.taskDescription = taskDescription;
//             this.requiredKeys = requiredKeys;
//             this.requiredKeysIndex = 0;
//             this.taskComplete = false;
//             this.isActiveTask = false;
//         }

//         pressKey(keyCode) {
//             if (this.requiredKeys[this.requiredKeysIndex] == keyCode) {
//                 if (this.requiredKeys.length == this.requiredKeysIndex + 1) {
//                     return lastKeyWasPressed;
//                 }
//                 return inProgress;
//             }
//             return wrongKeyWasPressed;
//         }

//         activateTask() {
//             this.isActiveTask = true;
//         }

//         finish() {
//             this.taskComplete = true;
//             this.isActiveTask = false;
//         }
//     }

//     $(document).ready(function () {
//         let startButton = $("#StartButton");
//         startButton.click(function () 
//         { 
//             console.log("Clicked!"); 
//         });
//     });
// }
