import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IMainMenu } from '@jupyterlab/mainmenu';
//import { ICommandPalette } from '@jupyterlab/apputils';
import { MenuSvg } from '@jupyterlab/ui-components';
import { //INotebookModel,
    INotebookTools,
    INotebookTracker
    } from '@jupyterlab/notebook';

/**
 * Initialization data for the JPSL_Tools_Menu extension.
 */

  // Useful structure for defining commands to reuse info in menus and commandRegistry
 interface CmdandInfo {
     id: string;
     label: string;
     caption: string;
 }

const plugin: JupyterFrontEndPlugin<void> = {
    id: 'JPSL_Tools_Menu:plugin',
    description: 'JLab compatible convenience menu for common activities in Jupyter Physical Science Lab.',
    autoStart: true,
    requires: [IMainMenu, INotebookTracker, INotebookTools],
    activate: async (app: JupyterFrontEnd,
          MainMenu: IMainMenu,
          notebookTracker: INotebookTracker,
          notebookTools: INotebookTools
    ) => {
        const { commands } = app;
    /**
    * Build the commands to add to the menu
    */
        const hidebeforeprint:CmdandInfo = {
            id: 'hidebeforeprint:JPSL_Tools_Menu:main-menu',
            label: 'Hide before print',
            caption: 'Hide before print.'
        };
        commands.addCommand(hidebeforeprint.id, {
          label: hidebeforeprint.label,
          caption: hidebeforeprint.caption,
          execute: () => {
            if (notebookTracker.currentWidget){
                if (notebookTracker.currentWidget.content.widgets){
                    let found = 0;
                    for (const cell of notebookTracker.currentWidget.content.widgets){
                        let metadata = cell.model.getMetadata('JPSL');
                        if (metadata){
                            if (metadata.hide_on_print){
                                cell.node.setAttribute("style","display:none;");
                                cell.hide();
                                found +=1;
                            }
                            if (metadata.hide_code_on_print){
                                cell.inputHidden = true;
                                found +=1;
                            }
                        }
                    }
                if (found == 0) {window.alert("No hide before print cells found.");}
                } else {
                    window.alert("No notebook cells found.");
                }
                } else {
                    window.alert("You do not appear to have a notebook in front or selected. Try again.");
                }
            console.log(`Hide before print has been called.`);
          },
        });

        const undohidebeforeprint:CmdandInfo = {
            id: 'undohidebeforeprint:JPSL_Tools_Menu:main-menu',
            label: 'Undo hide before print',
            caption: 'Undo hide before print.'
        };
        commands.addCommand(undohidebeforeprint.id, {
          label: undohidebeforeprint.label,
          caption: undohidebeforeprint.caption,
          execute: () => {
            if (notebookTracker.currentWidget){
                if (notebookTracker.currentWidget.content.widgets){
                    let found = 0;
                    for (const cell of notebookTracker.currentWidget.content.widgets){
                        let metadata = cell.model.getMetadata('JPSL');
                        if (metadata){
                            if (metadata.hide_on_print){
                                cell.node.removeAttribute("style");
                                cell.show();
                                found +=1;
                            }
                            if (metadata.hide_code_on_print){
                                cell.inputHidden = false;
                                found +=1;
                            }
                        }
                    }
                if (found == 0) {window.alert("No hide before print cells found.");}
                } else {
                    window.alert("No notebook cells found.");
                }
                } else {
                    window.alert("You do not appear to have a notebook in front or selected. Try again.");
                }
            console.log(`Undo hide before print has been called.`);
          },
        });

        const initJupyterPiDAQ:CmdandInfo = {
            id: 'initJupyterPiDAQ:JPSL_Tools_Menu:main-menu',
            label: 'Insert JupyterPiDAQ initialization code',
            caption: 'Insert JupyterPiDAQ initialization code.'
        };
        commands.addCommand(initJupyterPiDAQ.id, {
          label: initJupyterPiDAQ.label,
          caption: initJupyterPiDAQ.caption,
          execute: () => {
              const snippet = "from jupyterpidaq.DAQinstance import *";
              if (notebookTools.selectedCells){
                  // We will only act on the first selected cell
                  const cellEditor = notebookTools.selectedCells[0].editor;
                  if (cellEditor) {
                      //const tempPos = {column:0, line:0};
                      //cellEditor.setCursorPosition(tempPos);
                      //cellEditor.setSelection({start:tempPos, end: tempPos});
                      if (cellEditor.replaceSelection){
                        cellEditor.replaceSelection(snippet);
                      }
                  }
              } else {
                  window.alert('Please select a cell in a notebook.');
              }
              console.log('Insert JupyterPiDAQ init code called.');
          },
        });

        const initalgwsymp:CmdandInfo = {
            id: 'initalgwsymp:JPSL_Tools_Menu:main-menu',
            label: 'Insert Algebra with Sympy initialization code',
            caption: 'Insert Algebra with Sympy initialization code.'
        };
        commands.addCommand(initalgwsymp.id, {
          label: initalgwsymp.label,
          caption: initalgwsymp.caption,
          execute: () => {
              const snippet = "from algebra_with_sympy import *";
              if (notebookTools.selectedCells){
                  // We will only act on the first selected cell
                  const cellEditor = notebookTools.selectedCells[0].editor;
                  if (cellEditor) {
                      //const tempPos = {column:0, line:0};
                      //cellEditor.setCursorPosition(tempPos);
                      //cellEditor.setSelection({start:tempPos, end: tempPos});
                      if (cellEditor.replaceSelection){
                        cellEditor.replaceSelection(snippet);
                      }
                  }
              } else {
                  window.alert('Please select a cell in a notebook.');
              }
              console.log('Insert Algebra with Sympy init code called.');
          },
        });

        const initpandasGUI:CmdandInfo = {
            id: 'initpandasGUI:JPSL_Tools_Menu:main-menu',
            label: 'Insert PandasGUI initialization code',
            caption: 'Insert PandasGUI initialization code.'
        };
        commands.addCommand(initpandasGUI.id, {
          label: initpandasGUI.label,
          caption: initpandasGUI.caption,
          execute: () => {
              const snippet = "from pandas_GUI import *";
              if (notebookTools.selectedCells){
                  // We will only act on the first selected cell
                  const cellEditor = notebookTools.selectedCells[0].editor;
                  if (cellEditor) {
                      //const tempPos = {column:0, line:0};
                      //cellEditor.setCursorPosition(tempPos);
                      //cellEditor.setSelection({start:tempPos, end: tempPos});
                      if (cellEditor.replaceSelection){
                        cellEditor.replaceSelection(snippet);
                      }
                  }
              } else {
                  window.alert('Please select a cell in a notebook.');
              }
              console.log('Insert PandasGUI init code called.');
          },
        });

        const newcolGUI:CmdandInfo = {
            id: 'newcolGUI:JPSL_Tools_Menu:main-menu',
            label: 'Insert New Calculated Column GUI',
            caption: 'Insert PandasGUI new column code.'
        };
        commands.addCommand(newcolGUI.id, {
          label: newcolGUI.label,
          caption: newcolGUI.caption,
          execute: () => {
              const snippet = 'new_pandas_column_GUI()';
              if (notebookTools.selectedCells){
                  // We will only act on the first selected cell
                  const cellEditor = notebookTools.selectedCells[0].editor;
                  if (cellEditor) {
                      //const tempPos = {column:0, line:0};
                      //cellEditor.setCursorPosition(tempPos);
                      //cellEditor.setSelection({start:tempPos, end: tempPos});
                      if (cellEditor.replaceSelection){
                        cellEditor.replaceSelection(snippet);
                      }
                  }
              } else {
                  window.alert('Please select a cell in a notebook.');
              }
              console.log('Insert PandasGUI new column code called.');
          },
        });

        const plotGUI:CmdandInfo = {
            id: 'plotGUI:JPSL_Tools_Menu:main-menu',
            label: 'Insert New Plot GUI',
            caption: 'Insert PandasGUI new plot code.'
        };
        commands.addCommand(plotGUI.id, {
          label: plotGUI.label,
          caption: plotGUI.caption,
          execute: () => {
              const snippet = "plot_pandas_GUI()";
              if (notebookTools.selectedCells){
                  // We will only act on the first selected cell
                  const cellEditor = notebookTools.selectedCells[0].editor;
                  if (cellEditor) {
                      //const tempPos = {column:0, line:0};
                      //cellEditor.setCursorPosition(tempPos);
                      //cellEditor.setSelection({start:tempPos, end: tempPos});
                      if (cellEditor.replaceSelection){
                        cellEditor.replaceSelection(snippet);
                      }
                  }
              } else {
                  window.alert('Please select a cell in a notebook.');
              }
              console.log('Insert PandasGUI new plot code called.');
          },
        });

        const fitGUI:CmdandInfo = {
            id: 'fitGUI:JPSL_Tools_Menu:main-menu',
            label: 'Insert New Fit GUI',
            caption: 'Insert PandasGUI new fit code.'
        };
        commands.addCommand(fitGUI.id, {
          label: fitGUI.label,
          caption: fitGUI.caption,
          execute: () => {
              const snippet = 'fit_pandas_GUI()';
              if (notebookTools.selectedCells){
                  // We will only act on the first selected cell
                  const cellEditor = notebookTools.selectedCells[0].editor;
                  if (cellEditor) {
                      //const tempPos = {column:0, line:0};
                      //cellEditor.setCursorPosition(tempPos);
                      //cellEditor.setSelection({start:tempPos, end: tempPos});
                      if (cellEditor.replaceSelection){
                        cellEditor.replaceSelection(snippet);
                      }
                  }
              } else {
                  window.alert('Please select a cell in a notebook.');
              }
              console.log('Insert PandasGUI new fit code called.');
          },
        });

    /**
     * Create the menu that exposes these commands.
     */

     //** submenus */

     // Algebra with Sympy
         const algwsymsubmenu = new MenuSvg({commands});
         algwsymsubmenu.title.label = "Algebra with Sympy";

         algwsymsubmenu.addItem({
             command: initalgwsymp.id,
             args: {label: initalgwsymp.label, caption: initalgwsymp.caption}
         });
         algwsymsubmenu.addItem({
            command: 'help:open',
            args:{text: "Algebra with Sympy Docs",
            url:"https://gutow.github.io/Algebra_with_Sympy/",
            newBrowserTab:"true"}
        });

     // JupyterPiDAQ
         const PiDAQsubmenu = new MenuSvg({commands});
         PiDAQsubmenu.title.label = "JupyterPiDAQ";

         PiDAQsubmenu.addItem({
             command: initJupyterPiDAQ.id,
             args: {label: initJupyterPiDAQ.label, caption: initJupyterPiDAQ.caption}
         });
         PiDAQsubmenu.addItem({
            command: 'help:open',
            args:{text: "JupyterPiDAQ Docs",
            url:"https://jupyterphysscilab.github.io/JupyterPiDAQ/",
            newBrowserTab:"true"}
        });
     // PandasGUI
         const pandasGUIsubmn = new MenuSvg({commands});
         pandasGUIsubmn.title.label = "Pandas GUI";

         pandasGUIsubmn.addItem({
             command: initpandasGUI.id,
             args: {label: initpandasGUI.label, caption: initpandasGUI.caption}
         });
         pandasGUIsubmn.addItem({
             command: newcolGUI.id,
             args: {label: newcolGUI.label, caption: newcolGUI.caption}
         });
         pandasGUIsubmn.addItem({
             command: plotGUI.id,
             args: {label: plotGUI.label, caption: plotGUI.caption}
         });
         pandasGUIsubmn.addItem({
             command: fitGUI.id,
             args: {label: fitGUI.label, caption: fitGUI.caption}
         });
         pandasGUIsubmn.addItem({
            command: 'help:open',
            args:{text: "PandasGUI Docs",
            url:"https://jupyterphysscilab.github.io/jupyter_Pandas_GUI/",
            newBrowserTab:"true"}
        });

     //** Construct the menu */
        const menu = new MenuSvg({ commands });
        menu.title.label = 'JPSL Tools';
        menu.addClass('jp-JPSL-tool-menu');
        menu.addItem({
            command: hidebeforeprint.id,
            args: {label: hidebeforeprint.label, caption: hidebeforeprint.caption}
        });
        menu.addItem({
            command: undohidebeforeprint.id,
            args: {label: undohidebeforeprint.label, caption: undohidebeforeprint.caption}
        });
        menu.addItem({
            type: 'submenu',
            submenu: algwsymsubmenu,
            args: {label: algwsymsubmenu.title.label}
        });
        menu.addItem({
            type: 'submenu',
            submenu: PiDAQsubmenu,
            args: {label: PiDAQsubmenu.title.label}
        });
        menu.addItem({
            type: 'submenu',
            submenu: pandasGUIsubmn,
            args: {label: pandasGUIsubmn.title.label}
        });
        MainMenu.addMenu(menu);

        console.log('JupyterLab extension JPSL_Tools_Menu is activated!');

    }
};

export default plugin;
