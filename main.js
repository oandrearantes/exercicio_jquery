$(document).ready(function() {
    let totalTasks = 0;
    let completedTasks = 0;
    function updateCounters() {
        $('#total-tasks').text(totalTasks);
        $('#completed-tasks').text(completedTasks);
        $('#pending-tasks').text(totalTasks - completedTasks);
    }
    $('#task-form').on('submit', function(event) {
        event.preventDefault();
        const taskInput = $('#task-input').val();
        if (taskInput) {
            $('#task-list').append(`<li>${taskInput}</li>`);
            $('#task-input').val('');
            totalTasks++;
            updateCounters();
        }
    });
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
        completedTasks += $(this).hasClass('completed') ? 1 : -1;
        updateCounters();
    });
    updateCounters();
});