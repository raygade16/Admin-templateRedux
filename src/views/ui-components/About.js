import Menu from './Menu';
import Timer from './TimerExample'
import WelcomeDailog from './FancyBorder';
import HOCExample from './HOCExample';
function About({}) {
      return (
         <div>
             <Menu/>
            <h2>About</h2>
            <WelcomeDailog/>
            <HOCExample/>
            <Timer/>
         </div>
      );
   }
export default About;