
const pathConfig = {
        folder_app: 'app',
        folder_configs: 'configs',
        folder_routes: 'routes',
        folder_models: 'models',
        folder_controllers: 'controllers',
        folder_views: 'views'
}

global.__base = __dirname + '/';

global.__path_app = __base + pathConfig.folder_app + '/';
        global.__path_configs = __path_app + pathConfig.folder_configs + '/';
        global.__path_routes = __path_app + pathConfig.folder_routes + '/';
        global.__path_models = __path_app + pathConfig.folder_models + '/';
        global.__path_controllers = __path_app + pathConfig.folder_controllers + '/';
        global.__path_views = __path_app + pathConfig.folder_views + '/';