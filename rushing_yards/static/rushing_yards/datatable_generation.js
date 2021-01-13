console.time('render');
jQuery('#myTable').dataTable(
    {
        "ajax": '/rushing_yards/stats_data.json',
        "columns": [
            {"data": "Player"},
            {"data": "Team"},
            {"data": "Pos"},
            {"data": "Att"},
            {"data": "Att/G"},
            {"data": "Yds"},
            {"data": "Avg"},
            {"data": "Yds/G"},
            {"data": "TD"},
            {"data": "Lng"},
            {"data": "1st"},
            {"data": "1st%"},
            {"data": "20+"},
            {"data": "40+"},
            {"data": "FUM"},
        ],
        'bDestroy': true,
        "bInfo": true,
        "bProcessing": true,
        "bDeferRender": true,
        'iDisplayLength': 10,
        'sPaginationType': 'full_numbers',
        'sDom': '<"top"i> T<"clear">lBfrtip',
        buttons: ['csv'],
        'sPageButtonActive': "paginate_active",
        'sPageButtonStaticDisabled': "paginate_button",
        "oLanguage": {
            "sSearch": "Filter results:",
            "sInfo": "Got a total of _TOTAL_ results to show (_START_ to _END_)",
            "sLengthMenu": 'Show <select>' +
            '<option value="5">5</option>' +
            '<option value="10">10</option>' +
            '<option value="15">15</option>' +
            '<option value="20">20</option>' +
            '<option value="25">25</option>' +
            '</select> results',
        },
        "bSort": true,
    }
);

console.timeEnd('render');