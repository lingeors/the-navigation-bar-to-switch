$('document').ready(function () {
    getWorkerMess(); // initialize
    $("li[role='presentation']").click(function () {
        var self = $(this);
        init(self);
        // every switch it will pull the newer data from server
        if (self.attr('part') == 'nav_manager') {
            getWorkerMess();
        } else if(self.attr('part') == 'nav_progress') {
            getScheduleOfWork();
        } else if(self.attr('part') == 'nav_other') {
            getPicDispatch();
        }

    })

     /**
     * 导航栏切换时页面布局的初始化操作
     * @param  {object} self
     */
    function init(self) {
        $("li[role='presentation']").removeAttr('class');
        self.attr('class', 'active');
        $(".nav_module").css("display", 'none');
        var part = self.attr('part');
        part  = '#' + part;
        $(part).css("display","block");
    }

    function getPicDispatch() {
        
    }

    function getScheduleOfWork() {
        
    }

    function getWorkerMess() {
        
    }
})
