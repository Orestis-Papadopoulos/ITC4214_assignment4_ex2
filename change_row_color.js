
$(document).ready(function() {

    /**
     * Changes the color of the current row to black and of the next to red.
     * 
     * Initially all rows are black; then the first row gets red.
     * 
     * @listens For 'btn_next' to be clicked.
     */
    function set_only_next_row_red() {
        var table = document.getElementById("tbl_employees");
        var no_red_row = true, last_row_is_red = false; // by default

        $("tr").each(function(i) {
            if (this.style.color == "red") {
                $(this).css("color", "black"); 
                if (i == table.rows.length - 1) {
                    last_row_is_red = true;
                    return false; // stop iterating
                }              
                $(this).next().css("color", "red");
                no_red_row = false;
                return false; // stop iterating
            }
        });
        if (no_red_row || last_row_is_red) $("#first_row").css("color", "red");
    }

    /**
     * Changes the color of any red row to black.
     * 
     * Iterates all table rows and turns red rows to black rows.
     * 
     * @listens For 'btn_clear' to be clicked.
     */
    function set_all_rows_black() {
        $("tr").each(function() {
            if (this.style.color == "red") $(this).css("color", "black");
        });
    }

    // set button listeners
    $("#btn_next").click(set_only_next_row_red);
    $("#btn_clear").click(set_all_rows_black);
});
