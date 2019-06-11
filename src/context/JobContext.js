import React from 'react';

export const JobContext = React.createContext(
    {
        isFilterModalOpen:true,
        showFilterModal:() => {}
    }
);
