var MyApplicationToolbox = (function(){

    var _instance;
    var _anyComponent;
    var components = {};

    // options: an object containing configuration options for the singleton
    // e.g var options = { name: "test", pointX: 5};
    function Singleton( options ) {

        // set options to the options supplied
        // or an empty object if none are provided
        options = options || {};

        // set some properties for our singleton
        this.name = options.name || "SingletonTester";

    }

    function _initialize(options){

        // do something...
    }

    function _getInstance(options){
      if(instance === undefined){
          instance = new Singleton(options);
      }
    }

    function _getAnyComponent() {
        return _anyComponent();
    }

    // Optional: standard extension allowing
    // runtime registration of global objects.
    function getComponent(componentName) {
        return components[componentName];
    }

    function registerComponent(componentName, component){
        components[componentName] = component;
    }

    function deregisterComponent(componentName) {
        delete components[componentName];
    }

    _initialize(options);

    return {
        getInstance: _getInstance
    };
}());

/*
public class MyApplicationToolbox {
    private static MyApplicationToolbox instance;

    public static MyApplicationToolbox getInstance() {
        if (instance == null) {
            instance = new MyApplicationToolbox();
        }
        return instance;
    }

    protected MyApplicationToolbox() {
        initialize();
    }

    protected void initialize() {
        // Your code here
    }

    private AnyComponent anyComponent;

    public AnyComponent getAnyComponent() {
        return anyComponent();
    }
...

    // Optional: standard extension allowing
    // runtime registration of global objects.
    private Map components;

    public Object getComponent(String componentName) {
    return components.get(componentName);
}

public void registerComponent(String componentName, Object component)
{
    components.put(componentName, component);
}

public void deregisterComponent(String componentName) {
    components.remove(componentName);
}

}