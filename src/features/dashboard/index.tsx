import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MonthlyStatsPage from './MonthlyStats';
import OverviewPage from './Overview';

function Dashboard() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={OverviewPage} />
      <Route path={`${match.url}/monthly/:month`} component={MonthlyStatsPage} />
    </Switch>
  );
}

export default Dashboard;