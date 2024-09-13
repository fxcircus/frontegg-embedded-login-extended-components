import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import CustomLoaderComponent from './CustomLoaderComponent';
import { FronteggProvider } from '@frontegg/react';
import localizations from './localizations';
import themeOptions from './themeOptions'

const contextOptions = {
  baseUrl: 'https://[YOUR_SUBDOMAIN].frontegg.com',
  clientId: '[YOUR-CLIENT-ID]',
  tenantResolver: () => ({
    tenant: new URLSearchParams(window.location.search).get("organization"),
  }),
};

const authOptions = {
  keepSessionAlive: true,
};


const FeProvider = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <FronteggProvider
        customLoader={setLoading}
        contextOptions={contextOptions}
        authOptions={authOptions}
        hostedLoginBox={false}
        themeOptions={themeOptions}
        localizations={localizations}
        entitlementsOptions={{ enabled: true }}
      >
        <App />
      </FronteggProvider>
      {loading && <CustomLoaderComponent />}
    </div>
  );
};

ReactDOM.render(<FeProvider />, document.getElementById('root'));