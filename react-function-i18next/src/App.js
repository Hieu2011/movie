import Header from './Header';
import Post from './Post/index';
import { useTranslation, withTranslation } from "react-i18next";
import { useState } from 'react';

function App() {
  const [t, i18n] = useTranslation('common');
  const [FormData, setFormData] = useState({
    AppFeedBackType: {},
    AppFeedBackTypeWorkFlow: [],
    TotalStepCompletePercent: 0
  });

  
  const onChangeLanMain = (value) => {
    console.log('a : ' + value);
    i18n.changeLanguage(value);
    setFormData(
      {
        AppFeedBackType: { "a": "b" },
        AppFeedBackTypeWorkFlow: [{ "id": 1, "name": "hieu" }],
        TotalStepCompletePercent: 3
      }
    );

  }
  console.log(FormData);
  return (
    <div className="App">
      <Header onChangeLanMain={onChangeLanMain} />
      <Post />
    </div>
  );
}

export default App;
