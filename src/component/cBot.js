
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
  
 // floatingIcon:"https://www.sciastra.com/navbar/sciastra.webp",  // this icon appears on the icon of chat on home page
};


const generateBotResponse = (userMessage) => {
  const lowerCaseMessage = userMessage.toLowerCase();

  // Greetings
  if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')||lowerCaseMessage.includes('hii') || lowerCaseMessage.includes('namaste')) {
      return 'Hello! How can I assist you today?';
  }
  if (lowerCaseMessage.includes('how are you')) {
      return "I'm just a computer program, but thank you for asking! How can I help you today?";
  }
  if (lowerCaseMessage.includes('yes') || lowerCaseMessage.includes('no')) {
    return 'Ask your query';
}



  // Course-related queries
  if (lowerCaseMessage.includes('how many courses')) {
      return 'We offer a variety of courses for different entrance exams. Some examples include ISI & CMI, IAT, NEST, etc.';
  }


  // cuet -related queries
  if (lowerCaseMessage.includes('cuet')) {
      return 'For CUET 2024, we offer a test series covering Science, General Test, English, and Hindi. You can get it at a special discounted price of ₹975. ';
  }
  if ((lowerCaseMessage.includes('how much')|| lowerCaseMessage.includes('price of') || lowerCaseMessage.includes('price for')) && lowerCaseMessage.includes('cuet')) {
    return 'The CUET 2024 test series is available at a special discounted price of ₹975.';
}



  // IISc-related queries
  if (lowerCaseMessage.includes('about iisc')) {
      return 'For IISc, we provide HOMI for class 11th and various batches like Vikram Batch and Vikram 2.0 for 12th & droppers. ';
  }

  if ((lowerCaseMessage.includes('how much')|| lowerCaseMessage.includes('price') || lowerCaseMessage.includes('amount')) && lowerCaseMessage.includes('iisc')) {
    return 'For IISc, we offer HOMI (for class 11th) at ₹5199 , Vikram Batch(12th & droppers) at ₹6499. and Vikram 2.0 (12th & droppers) ₹5849';
  }



  // IISERs-related queries
  if (lowerCaseMessage.includes('about iisers')) {
      return 'For IISERs, we offer HOMI for class 11th, Vikram Batch, Scientific Writing Workshop, and Vikram 2.0 for 12th & droppers.';
  }

  if ((lowerCaseMessage.includes('how much') || lowerCaseMessage.includes('amount') || lowerCaseMessage.includes('price')) && lowerCaseMessage.includes('iisers')) {
    return 'For IISERs, we offer HOMI for class 11th at ₹5199, Vikram Batch at ₹6499, Scientific Writing Workshop at ₹1299, and Vikram 2.0 for 12th & droppers at at ₹5849.';
}

 // Queries for Selection or success rate


  if ((lowerCaseMessage.includes('tell me') || lowerCaseMessage.includes('what')||lowerCaseMessage.includes('about')) 
  && (lowerCaseMessage.includes('your success')|| lowerCaseMessage.includes('success') || lowerCaseMessage.includes('about selection')) ){
     return 'Our institute has an outstanding success rate, with top AIR positions achieved by students in various exams.';
  }
  if ((lowerCaseMessage.includes('tell me') || lowerCaseMessage.includes('how many') || lowerCaseMessage.includes('about')) 
   && (lowerCaseMessage.includes('topper')|| lowerCaseMessage.includes('ranker') || lowerCaseMessage.includes('top rank')) ){
     return "Several students from our institute have secured top ranks, some success stories include Adarsh V (AIR 1) in IAT, Sakshi Ghosh (AIR 7) and Debi Prasad (AIR 10) in IACS, Adityarup (AIR 12) in NEST, and Shouvik Datta (AIR 18) in IISC Bengaluru ";
  }

  if ((lowerCaseMessage.includes('tell me') || lowerCaseMessage.includes('what') || lowerCaseMessage.includes('about')) 
  && (lowerCaseMessage.includes('selection record')|| lowerCaseMessage.includes('overall selected') || lowerCaseMessage.includes('overall selection')) ){
     return 'We have achieved a total of 1000 selections, including 500+ students in IISERs, 100+ in NISER/CEBS, 30+ in IACS, and 12+ in ISI/CMI.';
  }
  


  // Additional questions
  if (lowerCaseMessage.includes('what courses do you offer')) {
      return 'We offer courses for various entrance exams, such as ISI & CMI, IAT, NEST, etc. If you have a specific exam in mind, feel free to ask about it!';
  }


 
  if ((lowerCaseMessage.includes('1 rs course')|| lowerCaseMessage.includes('price of 1 rs') || lowerCaseMessage.includes('1 rs')) || lowerCaseMessage.includes(' ₹1')) {
    return 'Yes we also offer courses for ₹ 1 , these courses are : ISI & CMI 2024 Preparation Guide , IAT 2024 Preparation Guide , NEST 2024 Preparation Guide. ';
 }
  
 if (lowerCaseMessage.includes('address') || lowerCaseMessage.includes('contact details') || lowerCaseMessage.includes('contact ') ) {
  return 'Address : SciAstra Education Pvt Ltd, Bhubaneswar, Odisha.  Email : support@sciastra.com';
}


  return "sorry, I couldn't understand. ask me related to courses, books, or exams?";
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
                             component: <Review />,
                             asMessage: true,
                             trigger: 'anythingElse',
                        },
                       
                        {
                            id: 'anythingElse',
                            message: 'Do you want to end chat?',
                            trigger: 'question',
                        },
                        {
                            id: 'question',
                            options: [
                                { value: 'yes', label: 'Yes', trigger: 'end-message' },
                                { value: 'no', label: 'No', trigger: 'loop' },
                            ],
                        },
                         
                        {
                            id: 'loop',
                            message: 'ask your query?',
                            trigger: 'name',
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
                   // catch ='true'
                />
            </ThemeProvider>

        );
    }
};
export default CBot;
