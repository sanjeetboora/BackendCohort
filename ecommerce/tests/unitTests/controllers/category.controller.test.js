const Model = require('../../../models');
const categoryController = require('../../../controllers/category.controller');
const { mockRequest, mockResponse } = require('../interceptor');
const newCategoryData = require('../mockData/newCategoryData.json');
Category = Model.category;
let req, res;
beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
});


describe('tests for categoryController.create', () => {

    beforeEach(() => {
        req.body = newCategoryData
    })

    it('it should call categoryController.create and create a new category in db successfully', async () => {
        const expectedResponse = {
            ...newCategoryData,
            id: 1
        }
        const spyOnCreate = jest.spyOn(Category, 'create').mockImplementation((newCategoryData) => Promise.resolve(expectedResponse));

        await categoryController.create(req, res);

        expect(spyOnCreate).toHaveBeenCalled();
        expect(Category.create).toHaveBeenCalled();
        expect(Category.create).toHaveBeenCalledWith(newCategoryData);
        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.send).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith(expectedResponse);

    });
    it('it should call categoryController.create and return an error', async () => {
        const spyOnCreate = jest.spyOn(Category, 'create').mockImplementation(() => Promise.reject(Error("This is an error")));
        await categoryController.create(req, res);

        await expect(spyOnCreate).toHaveBeenCalled();
        await expect(Category.create).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith({ message: "Some internal error occurred while storing the category data!" });
    });
});

describe('tests for categoryController.update', () => {
    beforeEach(() => {
        req.body = newCategoryData;
        req.params = {
            id: 1
        }
    });
    it('it should call categoryController.update and update category details in db', async () => {
        const spyOnUpdate = jest.spyOn(Category, 'update').mockImplementation((newCategoryData) => Promise.resolve(newCategoryData));
        await categoryController.update(req, res);

        await expect(spyOnUpdate).toHaveBeenCalled();
        await expect(Category.update).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith(newCategoryData);
    });

    it('it should call categoryController.update and error is thrown', async () => {
        const spyOnUpdate = jest.spyOn(Category, 'update').mockImplementation(() => Promise.reject());
        await categoryController.update(req, res);

        await expect(spyOnUpdate).toHaveBeenCalled();
        await expect(Category.update).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith({
            message: "Some internal error occurred while updating the category data!"
        });
    })
});


describe('tests for categoryController.findOne', () => {

    beforeEach(() => {
        req.params = {
            id: 1
        }
    });

    it('it should call categoryController.findOne and return the category', async () => {
        const spyOnFindByPk = jest.spyOn(Category, 'findByPk').mockImplementation(() => Promise.resolve(newCategoryData));
        await categoryController.findOne(req, res);

        await expect(spyOnFindByPk).toHaveBeenCalled();
        await expect(Category.findByPk).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith(newCategoryData);
    });

    it('it should call categoryController.findOne and return the error', async () => {
        const spyOnFindByPk = jest.spyOn(Category, 'findByPk').mockImplementation(() => Promise.reject(Error("This is an error")));
        await categoryController.findOne(req, res);

        await expect(spyOnFindByPk).toHaveBeenCalled();
        await expect(Category.findByPk).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith({
            message: "Some internal error occurred while fetching category based upon category id!"
        });
    });
});

describe('tests for categoryController.delete', () => {

    beforeEach(() => {
        req.params = {
            id: 1
        }
    });

    it('it should call categoryController.delete', async () => {
        const spyOnDestroy = jest.spyOn(Category, 'destroy').mockImplementation(() => Promise.resolve("Successfully Deleted"));
        await categoryController.delete(req, res);

        await expect(spyOnDestroy).toHaveBeenCalled();
        await expect(Category.destroy).toHaveBeenCalled();
        expect(res.sendStatus).toHaveBeenCalled();
        expect(res.sendStatus).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith("Successfully Deleted");
    });

    it('it should call categoryController.delete and return the error', async () => {
        const spyOnDestroy = jest.spyOn(Category, 'destroy').mockImplementation(() => Promise.reject(Error("This is an error")));
        await categoryController.delete(req, res);

        await expect(spyOnDestroy).toHaveBeenCalled();
        await expect(Category.destroy).toHaveBeenCalled();
        expect(res.sendStatus).toHaveBeenCalled();
        expect(res.sendStatus).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith({
            message: "Some internal error occurred while deleting the category!"
        });
    });
});



describe('tests for categoryController.findall', () => {

    it('it should call categoryController.findAll with empty query param and return all the categories', async () => {
        const spyOnFindAll = jest.spyOn(Category, 'findAll').mockImplementation(() => Promise.resolve(newCategoryData));
        await categoryController.findAll(req, res);

        await expect(spyOnFindAll).toHaveBeenCalled();
        await expect(Category.findAll).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith(newCategoryData);
    });

    it('it should call categoryController.findAll with some query param and return all the categories', async () => {
        req.query = {
            name: "Electronics"
        }
        const queryParam = {
            where: {
                name: "Electronics"
            }
        }

        const spyOnFindAll = jest.spyOn(Category, 'findAll').mockImplementation((queryParam) => Promise.resolve(newCategoryData));
        await categoryController.findAll(req, res);

        await expect(spyOnFindAll).toHaveBeenCalled();
        await expect(Category.findAll).toHaveBeenCalledWith(queryParam);
        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith(newCategoryData);
    });

    it('it should call categoryController.findAll with some query param and return all the categories', async () => {
        req.query = {
            name: "Electronics"
        }
        const spyOnFindAll = jest.spyOn(Category, 'findAll').mockImplementation(() => Promise.reject(Error("this is new error")));
        await categoryController.findAll(req, res);

        await expect(spyOnFindAll).toHaveBeenCalled();
        await expect(Category.findAll).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith({
            message: "Some internal error occurred while fetching all the categories"
        });
    });
});