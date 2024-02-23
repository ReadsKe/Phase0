//fetch pet stores
useEffect(()=>{
    fetch('/petstores')
    .then(res => res.json())
    .then(response =>{
        setPetstores(response)
      })
    },[onChange])

    //fetch pet store by ID
    const fetchPetStoreByID = (petstoreId) =>{
      fetch(`/petstores/${petstoreId}`)
      .then((res) => res.json())
      .then((response) => {
        setSelectedPetstore(response);
      });
    }

    //context data
    const contextData = {
      petstores,
      selectedPetstore,
      fetchPetStoreByID,
      onChange,
      setOnChange,
    }