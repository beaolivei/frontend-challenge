import React from 'react';
import { Route, Switch} from 'react-router-dom'
import WelcomeSection from './pages/welcome.js'
import LearnMore from './pages/learnMore'
import My2005List from './components/tables/list2005'
import My2006List from './components/tables/list2006'
import My2007List from './components/tables/list2007'
import My2008List from './components/tables/list2008'
import My2009List from './components/tables/list2009'
import My2010List from './components/tables/list2010'
import My2011List from './components/tables/list2011'
import My2012List from './components/tables/list2012'
import My2013List from './components/tables/list2013'
import My2014List from './components/tables/list2014'
import My2015List from './components/tables/list2015'


function App() {
  return (
    <Switch>
      <Route path='/' exact={true} component={WelcomeSection}/>
      <Route path='/learnMore'  component ={LearnMore}/>
      <Route path='/my2005List' component ={My2005List}/>
      <Route path='/my2006List' component ={My2006List}/>
      <Route path='/my2007List' component ={My2007List}/>
      <Route path='/my2008List' component ={My2008List}/>
      <Route path='/my2009List' component ={My2009List}/>
      <Route path='/my2010List' component ={My2010List}/>
      <Route path='/my2011List' component ={My2011List}/>
      <Route path='/my2012List' component ={My2012List}/>
      <Route path='/my2013List' component ={My2013List}/>
      <Route path='/my2014List' component ={My2014List}/>
      <Route path='/my2015List' component ={My2015List}/>
    </Switch>

  )
}

export default App;
