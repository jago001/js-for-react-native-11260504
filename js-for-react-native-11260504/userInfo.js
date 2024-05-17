function createUserProfiles(names, modifiedNames) {
    const userProfiles = [];
    let id = 1;
    for (let i = 0; i < names.length; i++) {
      const originalName = names[i];
      const modifiedName = modifiedNames[i];
      userProfiles.push({
        originalName,
        modifiedName,
        id,
      });
      id++;
    }
    return userProfiles;
  }
  