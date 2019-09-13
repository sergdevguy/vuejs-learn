/*var todoApp = new Vue({
    el: '#todo-list',
    data: {
        todos: [
            { text: 'Один'},
            { text: 'Два'},
            { text: 'Три' }
        ],
    },
    methods: {
        deleteLastChild: function () {
            this.todos.pop();
        },
        addChild: function () {
            this.todos.push( { text: '123' } );
        }
    }
});*/




var todoApp2 = new Vue({
    el: '#todo-list-2',
    data: {
        todos: [
            { text: 'Один'}
        ],
        new_item: ''
    },
    methods: {
        deleteLastChild: function () {
            this.todos.pop();
        },
        addChild: function () {
            this.todos.push( { text: this.new_item } );
        }
    }
});