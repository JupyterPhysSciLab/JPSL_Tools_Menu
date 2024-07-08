import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the JPSL_Tools_Menu extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'JPSL_Tools_Menu:plugin',
  description: 'JLab compatible convenience menu for common activities in Jupyter Physical Science Lab.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension JPSL_Tools_Menu is activated!');
  }
};

export default plugin;
