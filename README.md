To run this application  run the below commands :   

1.  First initialize the npm in this project, if it runs successfully a new folder .node_modules will be added .
     command : npm init

2. Make sure your are in your project directory , where all the folders and files of project are present. If not run below command in cmd by - cd followed by project name without curly braces.
     command  :  cd {project_folder_name}

3. Now run your project .
    command : npm run

    On successful run of your project you will get below message in terminal.
![Screenshot (62)](https://github.com/kaali001/Chatbot/assets/115466381/b133a338-92de-4e28-9af9-bfc6d7cd6518)



4. If you are getting multiple duplicates response of chatbot after taking user input, like this -
   
![chbot](https://github.com/kaali001/Chatbot/assets/115466381/245f54bd-3a31-4fe4-9245-53c3fa71dcdb)

5.  Then go to your index.js file ,
    and change this :
                            import ReactDOM from "react-dom/client";
                            ReactDOM.createRoot(document.getElementById('root')).render(
                                <React.StrictMode>
                                        <App />
                               </React.StrictMode>
                           )
    
    to this :
                           import { render } from "react-dom";
                           render(<App />, document.getElementById("root"));
                


 Thank you , Happy coding.
