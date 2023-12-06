// src/components/DepartmentList.tsx
import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Checkbox } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface DepartmentListProps {
  data: { department: string; sub_departments: string[] }[];
}

const DepartmentList: React.FC<DepartmentListProps> = ({ data }) => {
  const [openDepartments, setOpenDepartments] = useState<{ [key: string]: boolean }>({});
  const [selectedDepartments, setSelectedDepartments] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleToggle = (department: string) => {
    setOpenDepartments((prevOpen) => ({ ...prevOpen, [department]: !prevOpen[department] }));
  };

  const handleSelect = (department: string) => {
    setSelectedDepartments((prevSelected) => {
      const newSelected = { ...prevSelected, [department]: !prevSelected[department] };

      // If the department is selected, select all its sub-departments
      if (newSelected[department]) {
        data
          .find((item) => item.department === department)
          ?.sub_departments.forEach((subDepartment) => {
            newSelected[subDepartment] = true;
          });
      }

      // If all sub-departments are selected, also select the parent department
      const allSubDepartmentsSelected = data
        .find((item) => item.department === department)
        ?.sub_departments.every((subDepartment) => newSelected[subDepartment]);

      if (allSubDepartmentsSelected) {
        newSelected[department] = true;
      }

      return newSelected;
    });
  };

  return (
    <List>
      {data.map(({ department, sub_departments }) => (
        <React.Fragment key={department}>
          <ListItem button onClick={() => handleToggle(department)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={selectedDepartments[department] || false}
                tabIndex={-1}
                disableRipple
                onChange={() => handleSelect(department)}
              />
            </ListItemIcon>
            <ListItemText primary={department} />
            {openDepartments[department] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDepartments[department]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {sub_departments.map((subDepartment) => (
                <ListItem
                  key={subDepartment}
                  button
                  sx={{ paddingLeft: 4 }}
                  onClick={() => handleSelect(subDepartment)}
                  selected={selectedDepartments[subDepartment]}
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={selectedDepartments[subDepartment] || false}
                      tabIndex={-1}
                      disableRipple
                      onChange={() => handleSelect(subDepartment)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={subDepartment} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentList;
