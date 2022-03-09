function maxMeetings(startTime, endTime){
    let meeting = new Array(startTime.length);

    for(let i=0; i<startTime.length; i++){
        meeting[i] = [startTime[i], endTime[i]];
    }
   // meeting => [[1, 2], [3, 4], [0, 6]...]
    meeting.sort((a, b) => a[1] - b[1]); //sort meetings based upon end time

    let maxMeetings = 0;
    let lastMeetingEndTime = 0;
    for(let i=0; i<meeting.length; i++){
        let currMeetingStartTime = meeting[i][0];
        if(currMeetingStartTime >= lastMeetingEndTime){
            maxMeetings++;
            lastMeetingEndTime = meeting[i][1];//current meeting's end time
        }
    }
    return maxMeetings;
}


let startTime = [1, 3, 0, 6, 8, 4];
let endTime = [2, 4, 6, 7, 9, 9];
console.log(maxMeetings(startTime, endTime));
