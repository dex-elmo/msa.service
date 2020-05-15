import React from 'react';
import { Provider } from 'mobx-react';

import ProgressBarView from "~/lib/ui/ProgressBar";
import { ProgressModule } from '~/lib/ui/module';





function App(){
    ProgressModule.start_interceptor();
    return (
        <Provider>
                <ProgressBarView/>
        </Provider>
    );
}

export default App;
