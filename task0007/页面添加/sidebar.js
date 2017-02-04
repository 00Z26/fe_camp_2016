//根据教程写的
(function( ){
var Sidebar = function(eID,closebarID ){
    this.state = 'open';
    this.el = document.getElementById(eID||'sidebar');
    this.closeBarEl = document.getElementById(closebarID||'closebar');
    var self = this;
    this.el.addEventListener('click',function(event){});

        if (event.target !== this.el) {
            self.triggerSwitch();
        }

};
    Sidebar.prototype.close = function(){
    console.log('关闭sidebar');
        this.state='closed';
    };
    Sidebar.prototype.open = function(){
        console.log('opensidebar')
        this.state='opened';
    };
    Sidebar.prototype.triggerSwitch = function(){
        if(this.state === 'opened'){
            this.close();
        }
        else{
            this.open();
        }
    };
    var sidebar = new Sidebar();
})();