import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SiteBuildLogTable from '../../../../frontend/components/site/siteBuildLogTable';

describe('<SiteBuildLogTable/>', () => {
  it('should render a table of build logs', () => {
    const props = {
      buildLogs: [
        { id: 1, output: 'output 1', source: 'source 1', createdAt: '2017-06-19T14:45:12.126Z' },
        { id: 1, output: 'output 2', source: 'source 2', createdAt: '2017-06-19T14:50:44.336Z' },
      ],
    };

    const wrapper = shallow(<SiteBuildLogTable {...props} />);
    expect(wrapper.find('table')).to.have.length(1);
    expect(wrapper.find('table td').contains('output 1')).to.be.true;
    expect(wrapper.find('table td').contains('output 1')).to.be.true;
    expect(wrapper.find('table td').contains('source 1')).to.be.true;
    expect(wrapper.find('table td').contains('output 2')).to.be.true;
    expect(wrapper.find('table td').contains('source 2')).to.be.true;
  });
});
