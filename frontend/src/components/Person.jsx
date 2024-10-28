/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Person = ({ person, deletePerson, updateNumber }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalName, setModalName] = useState(person.name);
    const [modalNumber, setModalNumber] = useState(person.number);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        updateNumber(person.id, modalNumber);
        closeModal();
    };


    return (
        <>
            <tr key={person.id}>
                <td className="p-2 border border-blue-500">{person.name}</td>
                <td className="p-2 border border-blue-500">{person.number}</td>
                <td className="p-2 border border-blue-500">
                    <button onClick={() => deletePerson(person.id)}>del</button>
                    <button onClick={openModal}>up</button>
                    <button onClick={() => console.log('Copy')}>cp</button>
                </td>
            </tr>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-xl mb-4">Update Information</h2>
                        <form onSubmit={handleUpdate}>
                            <div>
                                <p>Name:</p>
                                <input value={modalName} onChange={(e) => setModalName(e.target.value)} className="w-full my-[2px] py-[10px] rounded-lg" />
                            </div>
                            <div>
                                <p>Number:</p>
                                <input value={modalNumber} onChange={(e) => setModalNumber(e.target.value)} className="w-full my-[2px] py-[10px] rounded-lg" />
                            </div>
                            <div className="flex justify-end mt-4">
                                <button type="button" onClick={closeModal} className="px-[20px] py-[10px] mr-2 border border-gray-600 bg-gray-600 hover:bg-gray-400 text-white rounded-lg">
                                    Cancel
                                </button>
                                <button type="submit" className="px-[20px] py-[10px] border border-blue-600 bg-blue-600 hover:bg-green-400 text-white rounded-lg">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

Person.propTypes = {
    person: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    deletePerson: PropTypes.func.isRequired,
    updateNumber: PropTypes.func.isRequired,
};

export default Person;