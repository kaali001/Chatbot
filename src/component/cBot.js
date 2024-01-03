
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


const theme = {
	 background: '#afa2bd',
    
	headerBgColor: 'var(--gradient)',
	headerFontSize: '20px',
	botBubbleColor: '#b656e2',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#234eb0',
	userFontColor: 'white',
};

// Setting some properties of the bot
const config = {
	botAvatar: "https://www.sciastra.com/navbar/sciastra.webp",
	floating: true,
};



const generateBotResponse = (userMessage) => {

    // Convert the user's message to lowercase for case-insensitive comparisons
    const lowerCaseMessage = userMessage.toLowerCase();
  
    if (lowerCaseMessage.includes('courses')) {
      return 'We offer a variety of courses for different entrance exams. Some examples include ISI & CMI, IAT, NEST, etc. Can I help you with information about a specific course?';
    }
  

    if (lowerCaseMessage.includes('books')) {
      return 'Our bookstore includes a range of books for different classes and subjects. Some popular options are Mastering Combo, Mastering Physics, Mastering Chemistry, etc. Is there a specific book you are interested in?';
    }
 
    if (lowerCaseMessage.includes('cuet')) {
      return 'For CUET 2024, we offer a test series covering Science, General Test, English, and Hindi. You can get it at a special discounted price of ₹975. Would you like more details or assistance with something else?';
    }
  
    if (lowerCaseMessage.includes('iisc')) {
      return 'For IISc, we provide HOMI for class 11th and various batches like Vikram Batch and Vikram 2.0 for 12th & droppers. Scientific Writing Workshop is also available. Can I assist you further with any specific information?';
    }
  
    if (lowerCaseMessage.includes('iisers')) {
      return 'For IISERs, we offer HOMI for class 11th, Vikram Batch, Scientific Writing Workshop, and Vikram 2.0 for 12th & droppers. Can I help you with more details or any specific query about these offerings?';
    }
  
  
    // Default response for unrecognized queries
    return "I'm sorry, I couldn't understand.";
  };



class Review extends Component {
 

    render() {
        const { steps } = this.props;
        const query = steps.name.value;
        var reply = generateBotResponse (query);
      return (
        <div style={{ width: '100%' }}>
          <h3>Response</h3>
          
                <p>{reply}</p>
              
        </div>
      );
    }
  }
  
  Review.propTypes = {
    steps: PropTypes.object,
  };
  
  Review.defaultProps = {
    steps: undefined,
  };



class CBot extends Component {

    render() {

        return (

            <ThemeProvider theme={theme}>
                <ChatBot

                    steps={[
                        {
                            id: '1',
                            message: 'Hello! How can I help you today?',
                            trigger: 'name',
                        },
                        {
                            id: 'name',
                            user: true,
                            trigger: 'response',
                        },
                        {
                            id: 'response',
                            message: 'Great! Check out your summary',
                            trigger: 'review',
                        },
                        {
                            id: 'review',
                            component: <Review />,
                            asMessage: true,
                            trigger: 'anythingElse',
                        },
                        {
                            id: 'anythingElse',
                            message: 'Anything else you want to know?',
                            trigger: 'question',
                        },
                        {
                            id: 'question',
                            options: [
                                { value: 'yes', label: 'Yes', trigger: '1' },
                                { value: 'no', label: 'No', trigger: 'end-message' },
                            ],
                        },
                        {
                            id: 'end-message',
                            message: 'Have a great day!',
                            end: true,
                        },
                    ]}

                    headerTitle="SciAstra"

                    {...config}
                    botDelay={1000}
                    userDelay={1000} // Adjust delay as needed

                />
            </ThemeProvider>

        );
    }
};
export default CBot;
