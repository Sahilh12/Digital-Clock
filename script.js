


$(document).ready(function () {
    function showTime() {
        var date = new Date()

        var hour = date.getHours()
        var minutes = date.getMinutes()
        var second = date.getSeconds()

        var session = 'AM'

        if (hour == 0) {
            hour = 12
        }
        if (hour >= 12) {
            session = 'PM'
        }
        if (hour > 12) {
            hour = hour - 12
        }

        hour = hour < 10 ? '0' + hour : hour;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        second = second < 10 ? '0' + second : second;



        $('#session').text(session)
        $('#hour').text(hour)
        $('#minute').text(minutes)
        $('#second').text(second)

        setTimeout(showTime, 1000)
    }
    showTime()
})